/* eslint-disable @typescript-eslint/default-param-last */
import { AnyAction } from 'redux';
import ACTIONS_TYPES from '../../constants/actionsTypes';
import HiddenResourcesType from '../../interfaces/IHiddenResource';

const initialState: HiddenResourcesType = {
  characters: [],
  comics: [],
  stories: [],
};

const hiddenReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS_TYPES.HIDE_CHARACTER:
      return { ...state, characters: [...state.characters, action.payload] };
    case ACTIONS_TYPES.HIDE_COMIC:
      return { ...state, comics: [...state.comics, action.payload] };
    case ACTIONS_TYPES.HIDE_STORY:
      return { ...state, stories: [...state.stories, action.payload] };
    case ACTIONS_TYPES.RESET_HIDDEN_RESOURCES:
      return {
        characters: [],
        comics: [],
        stories: [],
      };
    default:
      return state;
  }
};
export default hiddenReducer;
