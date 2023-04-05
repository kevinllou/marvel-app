import ICharactersItems from './ICharactersItems';
import IComicsItems from './IComicsItems';
import IThumbnail from './IThumbnail';

interface IStories {
  id: number;
  title: string;
  description?:string;
  type: string;
  thumbnail?: IThumbnail;
  characters: ICharactersItems;
  comics: IComicsItems;

}
export default IStories;
