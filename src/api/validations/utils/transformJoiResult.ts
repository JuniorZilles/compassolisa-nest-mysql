import Joi from 'joi';

const transformToArray = (value: Joi.ValidationError) => {
  const result = value.details.map((detail: Joi.ValidationErrorItem) => ({
    name: detail.message,
    description: detail.path.join('.')
  }));
  return result;
};

export default transformToArray;
