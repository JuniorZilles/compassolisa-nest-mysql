import { NextFunction, Request, Response } from 'express';

import Joi from 'Joi';
import transformToArray from '@validations/utils/transformJoiResult';
import { moneyRegex } from '@validations/utils/regex';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export default class RentalFleetPostPutValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        id_carro: Joi.number().required(),
        status: Joi.string().trim().valid('disponível', 'indisponível').required(),
        valor_diaria: Joi.string().trim().regex(moneyRegex).message('Invalid valor_diaria').required(),
        placa: Joi.string().trim().required()
      });

      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
