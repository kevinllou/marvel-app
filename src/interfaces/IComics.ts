import ICharactersItems from './ICharactersItems';
import IStoriesItems from './IStoriesItems';
import IThumbnail from './IThumbnail';

interface IComics {
  id: number;
  title: string;
  description?: string;
  thumbnail?: IThumbnail;
  stories: IStoriesItems;
  characters: ICharactersItems;
}

export default IComics;
