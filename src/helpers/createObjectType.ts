import ICharacters from '../interfaces/ICharacters';
import IComics from '../interfaces/IComics';
import IStories from '../interfaces/IStories';

const createCharacterObject = (type: ICharacters[] | null | undefined) => type?.[0];
const createComicObject = (type: IComics[] | null | undefined) => type?.[0];
const createStoriesObject = (type: IStories[] | null | undefined) => type?.[0];

export { createCharacterObject, createComicObject, createStoriesObject };
