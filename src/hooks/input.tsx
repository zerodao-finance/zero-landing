import { FormEvent, useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return {
    value,
    onChange,
    setValue,
  };
};
