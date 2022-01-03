import { NextFunction, Request, Response } from 'express';

import * as Joi from 'Joi';
import { Injectable, NestMiddleware } from '@nestjs/common';
import transformToArray from './utils/transformJoiResult';

@Injectable()
export default class IdValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        id: Joi.number().required()
      });

      const { error } = schema.validate(req.params, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
