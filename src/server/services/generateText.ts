import { Configuration, OpenAIApi } from 'openai';

type Data = {
  type: string;
  text: string;
};

const getFullText = (type: string, text: string) => {
  switch (type) {
    case 'song':
      return `Write a song based on ${text}`;
    case 'poetry':
      return `Write a song poetry on ${text}`;
    case 'fairytale':
      return `Write a song fairy tale on ${text}`;
    default:
      return `${text}`;
  }
};

const generateText = async ({ type, text }: Data) => {
  const fullText = getFullText(type, text);

  const configuration = new Configuration({
    apiKey: process.env.OPENAPI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: fullText,
    temperature: 1,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;
};

export default generateText;
