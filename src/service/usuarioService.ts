import usuarioSchema from '../schema/usuario.schema';
import { usuarioType } from '../types/usuario.type';

class usuarioService {
    async create(usuario: usuarioType) {
        try {
            const novoUsuario = await usuarioSchema.create(usuario);
            return novoUsuario;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
        }
    }

    async findByNome(nome: string) {
        try {
            const usuario = await usuarioSchema.findOne({ nome });
            return usuario;
        } catch (error) {
            console.error('Erro ao buscar usuário pelo nome:', error);
        }
    }

    async findAll() {
        try {
            const usuarios = await usuarioSchema.find();
            return usuarios;
        } catch (error) {
            console.error('Erro ao buscar todos os usuários:', error);
        }
    }

    async update(id: string, usuario: usuarioType) {
        try {
            const usuarioAtualizado = await usuarioSchema.findByIdAndUpdate(id, usuario, { new: true });
            return usuarioAtualizado;
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
        }
    }

    async delete(id: string) {
        try {
            await usuarioSchema.findByIdAndDelete(id);
            return "Usuário removido";
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
        }
    }
}

export default new usuarioService();
