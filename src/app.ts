import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { validationError, internalServerError } from './middlewares/error';
import routes from './routes';

const app: Application = express();

app.disable('x-powered-by');

/* DOTENV */
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

/* APPLYING CORS */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/* PARSING REQUEST BODY TO JSON */
app.use(
  bodyParser.json(),
);

/* ROUTES */
app.use(routes);

/* VALIDATION ERROS */
app.use(validationError);
app.use(internalServerError);

export default app;
