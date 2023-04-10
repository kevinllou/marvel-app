import IComicsItems from './IComicsItems';
import IStoriesItems from './IStoriesItems';
import IThumbnail from './IThumbnail';

interface ICharacters {
  id: number;
  name: string;
  description?: string;
  thumbnail?: IThumbnail;
  comics: IComicsItems;
  stories: IStoriesItems;

}
export default ICharacters;
