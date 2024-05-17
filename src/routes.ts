import { Router } from 'express';
import usuarioController from './controller/usuarioController';

const routes = Router();

routes.post('/criar-usuario', usuarioController.create);
routes.get('/buscar-usuario', usuarioController.findAll);
routes.put('/atualizar-usuario/:id', usuarioController.update);
routes.delete('/deletar-usuario/:id', usuarioController.delete);
routes.post('/login', usuarioController.login);

export { routes };
