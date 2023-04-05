import ICharacters from './ICharacters';
import IComics from './IComics';
import IStories from './IStories';

interface IResourcesType {
  characters: ICharacters[];
  comics: IComics[];
  stories: IStories[];
}

export default IResourcesType;
