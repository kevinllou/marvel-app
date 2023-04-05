/* eslint-disable consistent-return */
import { useState, useEffect, useRef } from 'react';
import IUseFetchState from '../interfaces/IUseFetchState';

type Cache<T> = { [url: string]: T };

const useFetch = <T>(url: string) => {
  const [fetchState, setFetchState] = useState<IUseFetchState<T>>({
    state: 'idle',
    data: null,
    error: null,
  });
  const cache = useRef<Cache<T>>({});
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  useEffect(() => {
    cancelRequest.current = false;
    const fetchData = async () => {
      if (cache.current[url]) {
        setFetchState((oldValues) => ({
          ...oldValues,
          data: cache.current[url],
        }));
        return;
      }
      try {
        setFetchState((oldValues) => ({
          ...oldValues,
          state: 'loading',
        }));
        const response = await fetch(url);
        if (!response.ok) {
          setFetchState({ data: null, state: 'error', error: new Error(response.statusText) });
          return;
        }
        const dataJson = await response.json();
        setFetchState({ data: dataJson, state: 'success', error: null });
      } catch (error) {
        setFetchState({
          data: null,
          state: 'error',
          error: error as Error,
        });
      }
    };
    fetchData();
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return fetchState;
};

export default useFetch;
