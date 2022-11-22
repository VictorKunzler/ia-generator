import { ChangeEvent } from 'react';
import styles from './Select.module.css';

type Option = {
  name: string;
  value: string;
};

type Props = {
  options: Option[];
  onChange: (param: string) => void;
};

const Select = ({ options, onChange }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select className={styles.select} onChange={handleOnChange}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
