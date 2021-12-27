import { NextFunction, Request, Response } from 'express';

import Joi from 'Joi';
import transformToArray from '@validations/utils/transformJoiResult';
import { cnpjRegex, cepRegex } from '@validations/utils/regex';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export default class RentalGetValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void | Response {
    try {
      const schema = Joi.object({
        nome: Joi.string().trim(),
        cnpj: Joi.string()
          .trim()
          .regex(cnpjRegex)
          .message('"cnpj" has a invalid format, it should be XX.XXX.XXX/XXXX-XX'),
        atividades: Joi.string().trim(),
        cep: Joi.string().trim().regex(cepRegex).message('"cep" with incorrect format, it should be XXXXX-XXX'),
        number: Joi.string().trim(),
        complemento: Joi.string().trim(),
        logradouro: Joi.string().trim(),
        bairro: Joi.string().trim(),
        localidade: Joi.string().trim(),
        uf: Joi.string()
          .trim()
          .length(2)
          .valid(
            'AC',
            'AL',
            'AP',
            'AM',
            'BA',
            'CE',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PR',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO',
            'DF'
          ),
        isFilial: Joi.boolean(),
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
