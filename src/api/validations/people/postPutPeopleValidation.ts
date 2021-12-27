import { NextFunction, Request, Response } from 'express';

import Extension from '@joi/date';
import * as Joi from 'Joi';
import transformToArray from '@validations/utils/transformJoiResult';
import { cpfRegex } from '@validations/utils/regex';
import { Injectable, NestMiddleware } from '@nestjs/common';

const JoiDate = Joi.extend(Extension);

@Injectable()
export default class PeoplePostPutValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        nome: Joi.string().trim().required(),
        cpf: Joi.string()
          .trim()
          .regex(cpfRegex)
          .message('"cpf" has a invalid format, it should be XXX.XXX.XXX-XX')
          .required(),
        data_nascimento: JoiDate.date().format('DD/MM/YYYY').required(),
        email: Joi.string().trim().email().required(),
        senha: Joi.string().trim().min(6).required(),
        habilitado: Joi.string().trim().valid('sim', 'não').required()
      });

      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
