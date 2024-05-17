import { Request, Response } from 'express';
import usuarioService from '../service/usuarioService';
import { usuarioType } from '../types/usuario.type';
import { addUser, authenticateUser } from '../utils/authentication';

class usuarioController {
    async create(req: Request, res: Response) {
        try {
            const usuario = await usuarioService.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { nome, senha } = req.body;

            const nomeUsuario: string = nome ?? '';
            const senhaUsuario: string = senha ?? '';

            const usuario: usuarioType | any = await usuarioService.findByNome(nomeUsuario);

            if (!usuario) {
                console.log('Usuário não encontrado para o nome:', nome);
                return res.status(401).json({ error: 'Nome ou senha incorretos' });
            }

            addUser(nomeUsuario, senhaUsuario);
            
            const authenticated = authenticateUser(nomeUsuario, senhaUsuario);

            if (!authenticated) {
                console.log('Senha incorreta para o usuário:', nome);
                return res.status(401).json({ error: 'Nome ou senha incorretos' });
            }

            console.log('Login bem-sucedido para o usuário:', nome);
            res.status(200).json({ message: 'Login bem-sucedido', usuario });
        } catch (error) {
            console.error('Erro no processo de login:', error);
            res.status(500).json({ error: 'Erro ao processar login' });
        }
    }

    

    async findAll(req: Request, res: Response) {
        try {
            const usuarios = await usuarioService.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const usuario = await usuarioService.update(req.params.id, req.body);
            res.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const usuario = await usuarioService.delete(req.params.id);
            res.status(200).json({ message: 'Usuário removido' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
}

export default new usuarioController();
