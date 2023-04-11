import mockCharacters from '../mocks/mockCharacters';
import mockComics from '../mocks/mockComics';
import mockStories from '../mocks/mockStories';
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
  const action = hideCharacter(mockCharacters.data.results?.[0].id);
  const newState = hiddenReducer(previousState, action);
  expect(newState.characters).toEqual([mockCharacters.data.results?.[0].id]);
});

it('should hide a comic from the list', () => {
  const previousState: HiddenResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = hideComic(mockComics.data.results?.[0].id);
  const newState = hiddenReducer(previousState, action);
  expect(newState.comics).toEqual([mockComics?.data.results[0].id]);
});

it('should hide a story from the list', () => {
  const previousState: HiddenResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = hideStory(mockStories.data.results?.[0].id);
  const newState = hiddenReducer(previousState, action);
  expect(newState.stories).toEqual([mockStories.data.results?.[0].id]);
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
