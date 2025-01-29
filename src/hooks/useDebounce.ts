import { useCallback } from 'react';
import debounce from 'lodash/debounce';

const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) => {
  return useCallback(
    debounce((...args: Parameters<T>) => callback(...args), delay),
    [callback, delay]
  );
};

export default useDebounce;