import { FormEvent, useState } from 'react';

import { ethers } from 'ethers';

export const useInput = (type?: 'address' | 'string') => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    if (type === 'address') {
      if (ethers.utils.isAddress(e.currentTarget.value)) setError(false);
      else setError(true);
    }
  };

  const clear = () => setValue('');

  return {
    value,
    onChange,
    setValue,
    error,
    clear,
  };
};
