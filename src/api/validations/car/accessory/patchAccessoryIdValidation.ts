import { NextFunction, Request, Response } from 'express';

import Joi from 'joi';
import transformToArray from '@validations/utils/transformJoiResult';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export default class AccessoryIdPatchValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        id: Joi.number().required(),
        accessoryId: Joi.number().required()
      });

      const { error } = schema.validate(req.params, { abortEarly: false });
      if (error) throw error;
      return next();
    } catch (error) {
      return res.status(400).json(transformToArray(error as Joi.ValidationError));
    }
  }
}
