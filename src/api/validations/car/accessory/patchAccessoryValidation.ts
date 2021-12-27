import { NextFunction, Request, Response } from 'express';

import Joi from 'Joi';
import transformToArray from '@validations/utils/transformJoiResult';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export default class AccessoryPatchValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        descricao: Joi.string().trim().required()
      }).required();

      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
