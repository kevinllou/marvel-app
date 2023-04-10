import mockCharacters from '../__mocks__/mockCharacters';
import mockComics from '../__mocks__/mockComics';
import mockStories from '../__mocks__/mockStories';
import HiddenResourcesType from '../interfaces/IHiddenResource';
import {
  hideCharacter, hideComic, hideStory, resetHiddenResources,
} from '../redux/actions';
import hiddenReducer from '../redux/reducers/hiddenReducer';

it('should hide a character from the list', () => {
  const previousState: HiddenResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = hideCharacter(mockCharacters?.[0].id);
  const newState = hiddenReducer(previousState, action);
  expect(newState.characters).toEqual([mockCharacters?.[0].id]);
});

it('should hide a comic from the list', () => {
  const previousState: HiddenResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = hideComic(mockComics?.[0].id);
  const newState = hiddenReducer(previousState, action);
  expect(newState.comics).toEqual([mockComics?.[0].id]);
});

it('should hide a story from the list', () => {
  const previousState: HiddenResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = hideStory(mockStories?.[0].id);
  const newState = hiddenReducer(previousState, action);
  expect(newState.stories).toEqual([mockStories?.[0].id]);
});

it('should reset all hidden elements', () => {
  const previousState: HiddenResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = resetHiddenResources();
  const newState = hiddenReducer(previousState, action);
  expect(newState).toEqual({
    characters: [],
    comics: [],
    stories: [],
  });
});
