/* eslint-disable max-len */
import ICharacters from '../interfaces/ICharacters';
import IComics from '../interfaces/IComics';
import IStories from '../interfaces/IStories';

const createCharacterObject = (type: ICharacters[] | null | undefined):ICharacters | undefined => type?.[0];
const createComicObject = (type: IComics[] | null | undefined):IComics | undefined => type?.[0];
const createStoriesObject = (type: IStories[] | null | undefined): IStories | undefined => type?.[0];

export { createCharacterObject, createComicObject, createStoriesObject };
