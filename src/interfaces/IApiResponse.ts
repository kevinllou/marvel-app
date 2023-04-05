import IData from './IData';

interface IApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  data: IData<T> | null;
}
export default IApiResponse;
