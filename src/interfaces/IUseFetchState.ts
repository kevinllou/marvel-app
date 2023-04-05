interface IUseFetchState<T> {
  state: 'idle' | 'loading' | 'error' | 'success';
  data: null | T;
  error: null | Error;
}

export default IUseFetchState;
