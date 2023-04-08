/* eslint-disable consistent-return */
import { useState, useEffect, useRef } from 'react';
import IUseFetchState from '../interfaces/IUseFetchState';

const useFetch = <T>(url: string) => {
  const [fetchState, setFetchState] = useState<IUseFetchState<T>>({
    state: 'idle',
    data: null,
    error: null,
  });
  const cache = useRef(null);
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  useEffect(() => {
    cancelRequest.current = false;
    const fetchData = async () => {
      if (cache.current) {
        setFetchState((oldValues) => ({
          ...oldValues,
          data: cache.current,
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
        cache.current = dataJson;
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
