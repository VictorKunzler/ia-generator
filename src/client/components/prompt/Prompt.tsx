import { ChangeEvent } from 'react';

import styles from './Prompt.module.css';

type Data = {
  onChange: (param: string) => void;
  value: string;
};

const Prompt = ({ onChange, value }: Data) => {
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleOnChange}
      className={styles.prompt}
    ></textarea>
  );
};

export default Prompt;
