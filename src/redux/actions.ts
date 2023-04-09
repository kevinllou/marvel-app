import ACTIONS_TYPES from '../constants/actionsTypes';
import ICharacters from '../interfaces/ICharacters';
import IComics from '../interfaces/IComics';
import IStories from '../interfaces/IStories';

export const addCharacterToFavorites = (character: ICharacters | null | undefined) => ({
  type: ACTIONS_TYPES.ADD_CHARACTER_TO_FAVORITES,
  payload: character,
});

export const addComicToFavorites = (comic: IComics | null | undefined) => ({
  type: ACTIONS_TYPES.ADD_COMIC_TO_FAVORITES,
  payload: comic,
});

export const addStoryToFavorites = (story: IStories | null | undefined) => ({
  type: ACTIONS_TYPES.ADD_STORY_TO_FAVORITES,
  payload: story,
});

export const removeCharacterOfFavorites = (characterId: number | undefined) => ({
  type: ACTIONS_TYPES.REMOVE_CHARACTER_OF_FAVORITES,
  payload: characterId,
});

export const removeComicOfFavorites = (comicId: number | undefined) => ({
  type: ACTIONS_TYPES.REMOVE_COMIC_OF_FAVORITES,
  payload: comicId,
});

export const removeStoryOfFavorites = (storyId: number | undefined) => ({
  type: ACTIONS_TYPES.REMOVE_STORY_OF_FAVORITES,
  payload: storyId,
});

export const removeAllFavorites = () => ({
  type: ACTIONS_TYPES.REMOVE_ALL_FAVORITES,
});
export const hideCharacter = (characterId: number) => ({
  type: ACTIONS_TYPES.HIDE_CHARACTER,
  payload: characterId,
});

export const hideComic = (comicId: number) => ({
  type: ACTIONS_TYPES.HIDE_COMIC,
  payload: comicId,
});

export const hideStory = (storyId: number) => ({
  type: ACTIONS_TYPES.HIDE_STORY,
  payload: storyId,
});

export const resetHiddenResources = () => ({
  type: ACTIONS_TYPES.RESET_HIDDEN_RESOURCES,
});
