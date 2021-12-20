import { Injectable, NestMiddleware } from '@nestjs/common';
import transformToArray from '@validations/utils/transformJoiResult';
import { NextFunction, Request, Response } from 'express';

import Joi from 'joi';

@Injectable()
export default class CarGetValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        modelo: Joi.string().trim(),
        cor: Joi.string().trim(),
        ano: Joi.number().min(1950).max(2022),
        descricao: Joi.string().trim(),
        quantidadePassageiros: Joi.number(),
        limit: Joi.number(),
        offset: Joi.number()
      });

      const { error } = schema.validate(req.query, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
