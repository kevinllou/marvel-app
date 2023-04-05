/* eslint-disable @typescript-eslint/default-param-last */
import { AnyAction } from 'redux';
import ACTIONS_TYPES from '../constants/actionsTypes';
import IResourcesType from '../interfaces/IResourcesType';

const initialState: IResourcesType = {
  characters: [],
  comics: [],
  stories: [],
};
function bookmarksReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ACTIONS_TYPES.ADD_CHARACTER_TO_FAVORITES:
      return { ...state, characters: [...state.characters, action.payload] };
    case ACTIONS_TYPES.ADD_COMIC_TO_FAVORITES:
      return { ...state, comics: [...state.comics, action.payload] };
    case ACTIONS_TYPES.ADD_STORY_TO_FAVORITES:
      return { ...state, stories: [...state.stories, action.payload] };
    case ACTIONS_TYPES.REMOVE_CHARACTER_OF_FAVORITES:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== action.payload,
        ),
      };
    case ACTIONS_TYPES.REMOVE_COMIC_OF_FAVORITES:
      return {
        ...state,
        comics: state.comics.filter((comic) => comic.id !== action.payload),
      };
    case ACTIONS_TYPES.REMOVE_STORY_OF_FAVORITES:
      return {
        ...state,
        stories: state.stories.filter((story) => story.id !== action.payload),
      };
    case ACTIONS_TYPES.REMOVE_ALL_FAVORITES:
      return {
        characters: [],
        comics: [],
        stories: [],
      };
    default:
      return state;
  }
}

export default bookmarksReducer;
