import type { NextApiRequest, NextApiResponse } from 'next';
import generateText from '../../../src/server/services/generateText';
import validateTextPost from '../../../validations/post/text';

type Data = {
  text: string;
};

type ApiError = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiError>
) {
  if (req.method !== 'POST') {
    res.status(405).send({
      message: 'Only POST requests allowed',
    });

    return;
  }

  if (!validateTextPost(req.body)) {
    res.status(400).send({
      message: 'Wrong data type',
    });

    return;
  }

  const text = await generateText(req.body);

  if (!text) {
    res.status(500).send({
      message: 'Internal API Error',
    });

    return;
  }

  res.status(200).json({ text });
}
