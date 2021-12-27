import { NextFunction, Request, Response } from 'express';

import * as Joi from 'Joi';
import Extension from '@joi/date';
import transformToArray from '@validations/utils/transformJoiResult';
import { moneyRegex } from '@validations/utils/regex';
import { Injectable, NestMiddleware } from '@nestjs/common';

const JoiDate = Joi.extend(Extension);

@Injectable()
export default class RentalReserveGetValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        id_user: Joi.number(),
        id_carro: Joi.number(),
        valor_final: Joi.string().trim().regex(moneyRegex).message('Invalid valor_final'),
        data_inicio: JoiDate.date().format('DD/MM/YYYY'),
        data_fim: JoiDate.date().format('DD/MM/YYYY'),
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
