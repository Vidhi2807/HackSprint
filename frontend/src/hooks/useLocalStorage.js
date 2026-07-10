import { useState, useEffect } from 'react';

/**
 * useLocalStorage hook — sync React state with localStorage
 * @param {string} key
 * @param {*} initialValue
 * @returns {[any, function]}
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('useLocalStorage Error:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
