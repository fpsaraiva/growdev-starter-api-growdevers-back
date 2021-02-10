import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

// Recurso Login
routes.post('/login', SessionController.store);

// Recurso USER
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
/* routes.get('/users/:uid', UserController.show);
routes.put('/users/:uid', UserController.update);
routes.delete('/users/:uid', UserController.delete); */

export default routes;
