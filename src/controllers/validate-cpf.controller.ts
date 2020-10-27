/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import * as cpfCnpjValidator from 'cpf-cnpj-validator';
import { BadRequestError } from '../shared/errors';

const MSG_PROCESSANDO = 'processando';

/**
 * @throws Error
 */
const validateOrThrowErrorCpf = (cpf: string): void => {
  if (!cpf) throw new BadRequestError('Informe o campo \'cpf\'', 'cpf');
  if (!cpfCnpjValidator.cpf.isValid(cpf)) throw new BadRequestError('Cpf fornecido inválido!', 'cpf');
};

export const validateCpf = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    validateOrThrowErrorCpf(req.body?.cpf);
    return res.status(200).json({ status: MSG_PROCESSANDO });
  } catch (error) {
    next(error);
  }
};

export const getValidateCpf = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    validateOrThrowErrorCpf(req.params?.cpf);
    return res.status(200).json({ status: MSG_PROCESSANDO });
  } catch (error) {
    next(error);
  }
};
