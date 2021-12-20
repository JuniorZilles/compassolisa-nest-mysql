import { NextFunction, Request, Response } from 'express';

import Joi from 'joi';
import transformToArray from '@validations/utils/transformJoiResult';
import { moneyRegex } from '@validations/utils/regex';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export default class RentalFleetGetValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        id_carro: Joi.number(),
        status: Joi.string().trim().valid('disponível', 'indisponível'),
        valor_diaria: Joi.string().trim().regex(moneyRegex).message('Invalid valor_diaria'),
        placa: Joi.string().trim(),
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
