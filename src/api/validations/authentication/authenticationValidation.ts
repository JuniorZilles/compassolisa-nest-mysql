import { Injectable, NestMiddleware } from '@nestjs/common';
import transformToArray from '@validations/utils/transformJoiResult';
import { NextFunction, Request, Response } from 'express';

import * as Joi from 'Joi';

@Injectable()
export default class AuthenticateValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        senha: Joi.string().trim().min(6).required()
      });

      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
