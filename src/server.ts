/* eslint-disable no-console */
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { port } from './configs/env';
import { getValidateCpf, validateCpf } from './controllers/validate-cpf.controller';

const PREFIX_API = '/api/v1';

const app = express();

app.use(express.json());

app.post(`${PREFIX_API}/validate-cpf`, validateCpf);
app.get(`${PREFIX_API}/validate-cpf/:cpf`, getValidateCpf);

// eslint-disable-next-line no-unused-vars
app.use((error, req: Request, res: Response, next: NextFunction): Response => {
  if (error.httpStatusCode) {
    return res.status(error.httpStatusCode).json({
      error: error.name,
      message: error.message,
      param: error.param,
    });
  }
  return res.status(500).json({
    error: 'InternalServerError',
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  });
});

app.listen(port, () => console.log(`Rodando na porta: ${port}`));
