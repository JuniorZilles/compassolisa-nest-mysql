import { NextFunction, Request, Response } from 'express';

import Joi from 'joi';
import Extension from '@joi/date';
import transformToArray from '@validations/utils/transformJoiResult';
import { idRegex } from '@validations/utils/regex';
import { Injectable, NestMiddleware } from '@nestjs/common';

const JoiDate = Joi.extend(Extension);

@Injectable()
export default class RentalReservePostPutValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        id_carro: Joi.number().required(),
        data_inicio: JoiDate.date().format('DD/MM/YYYY').required(),
        data_fim: JoiDate.date().format('DD/MM/YYYY').required()
      });

      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
