import { TEXT_GENERATION_TYPES as TYPES } from '../../utils/constants';

const VALID_TYPES = TYPES.map((type) => type.value);

type Data = {
  type: string;
  text: string;
};

const validateTextPost = function (body: unknown): body is Data {
  if (!body || typeof body !== 'object') return false;

  const isTypeValid = 'type' in body && VALID_TYPES.includes(body.type as any);

  const isTextValid = 'text' in body && typeof body.text === 'string';

  return isTypeValid && isTextValid;
};

export default validateTextPost;
