type Data = {
  type: string;
  text: string;
};

const generate = async ({ type, text }: Data) => {
  try {
    const result = await fetch('/api/generate/text', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        text,
      }),
      method: 'POST',
    });

    return result.json();
  } catch (e) {
    console.log(e);
  }
};

export default generate;
