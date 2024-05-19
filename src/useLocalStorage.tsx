import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: number) {
  const getInitialValue = () => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? Number(savedValue) : initialValue;
  };

  const [value, setValue] = useState<number>(getInitialValue);

  useEffect(() => {
    localStorage.setItem(key, value.toString());
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;