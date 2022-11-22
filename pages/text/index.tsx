import { SyntheticEvent, useState } from 'react';
import Head from 'next/head';

import Prompt from '../../src/client/components/prompt/Prompt';
import Select from '../../src/client/components/select/Select';

import styles from './index.module.css';
import generate from '../../src/client/services/generate';

const TYPES = [
  {
    name: 'Random Text',
    value: 'randomText',
  },
  {
    name: 'Song',
    value: 'song',
  },
  {
    name: 'Poetry',
    value: 'poetry',
  },
  {
    name: 'Fairytale',
    value: 'fairytale',
  },
];

export default function TextGenerator() {
  const [text, setText] = useState('');
  const [textType, setTextType] = useState(TYPES[0].value);
  const [generatedTextArray, setGeneratedTextArray] = useState([]);

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const result = await generate({ text, type: textType });

    setGeneratedTextArray(result.text.split('\n'));
  };

  return (
    <>
      <Head>
        <title>Text Generator</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.inputsContainer}>
          <h1 className={styles.title}>Text Generator</h1>

          <p className={styles.description}>
            Insert an initial prompt about the text that you want generate
          </p>

          <form onSubmit={handleOnSubmit} className={styles.form}>
            <Select options={TYPES} onChange={setTextType} />

            <Prompt onChange={setText} value={text} />
            <button className={styles.submitButton} type='submit'>
              Generate
            </button>
          </form>
        </div>

        <div className={styles.result}>
          <h2>Result:</h2>
          {generatedTextArray &&
            generatedTextArray.map((line) => <p>{line}</p>)}
        </div>
      </main>
    </>
  );
}
