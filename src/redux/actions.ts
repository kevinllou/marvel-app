import ACTIONS_TYPES from '../constants/actionsTypes';
import ICharacters from '../interfaces/ICharacters';
import IComics from '../interfaces/IComics';
import IStories from '../interfaces/IStories';

export const addCharacterToFavorites = (character: ICharacters | null | undefined) => ({
  type: ACTIONS_TYPES.ADD_CHARACTER_TO_FAVORITES,
  payload: character,
});

export const addComicToFavorites = (comic: IComics) => ({
  type: ACTIONS_TYPES.ADD_COMIC_TO_FAVORITES,
  payload: comic,
});

export const addStoryToFavorites = (story: IStories) => ({
  type: ACTIONS_TYPES.ADD_STORY_TO_FAVORITES,
  payload: story,
});

export const removeCharacterOfFavorites = (characterId: number) => ({
  type: ACTIONS_TYPES.REMOVE_CHARACTER_OF_FAVORITES,
  payload: characterId,
});

export const removeComicOfFavorites = (comicId: number) => ({
  type: ACTIONS_TYPES.REMOVE_COMIC_OF_FAVORITES,
  payload: comicId,
});

export const removeStoryOfFavorites = (storyId: number) => ({
  type: ACTIONS_TYPES.REMOVE_STORY_OF_FAVORITES,
  payload: storyId,
});

export const removeAllFavorites = () => ({
  type: ACTIONS_TYPES.REMOVE_ALL_FAVORITES,
});
