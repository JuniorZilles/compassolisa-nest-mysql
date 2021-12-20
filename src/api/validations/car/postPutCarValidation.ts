import { Injectable, NestMiddleware } from '@nestjs/common';
import transformToArray from '@validations/utils/transformJoiResult';
import { NextFunction, Request, Response } from 'express';

import Joi from 'joi';

@Injectable()
export default class CarPostPutValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        modelo: Joi.string().trim().required(),
        cor: Joi.string().trim().required(),
        ano: Joi.number().min(1950).max(2022).required(),
        acessorios: Joi.array()
          .min(1)
          .items(
            Joi.object({
              descricao: Joi.string().trim().required()
            })
          )
          .unique(),
        quantidadePassageiros: Joi.number().required()
      });

      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
