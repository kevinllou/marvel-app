interface IData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[] | null;
}
export default IData;
