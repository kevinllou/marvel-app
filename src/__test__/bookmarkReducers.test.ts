import mockCharacters from '../__mocks__/mockCharacters';
import mockComics from '../__mocks__/mockComics';
import mockStories from '../__mocks__/mockStories';
import IResourcesType from '../interfaces/IResourcesType';
import {
  addCharacterToFavorites,
  addComicToFavorites,
  addStoryToFavorites,
  removeCharacterOfFavorites,
  removeComicOfFavorites,
  removeStoryOfFavorites,
  removeAllFavorites,

} from '../redux/actions';
import bookmarksReducer from '../redux/reducers/bookmarkReducer';

it('should return an empty bookmark state', () => {
  const newState = bookmarksReducer(undefined, { type: null });
  expect(newState).toEqual({
    characters: [],
    comics: [],
    stories: [],
  });
});

it('should add a character to bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = addCharacterToFavorites(mockCharacters?.[0]);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.characters).toEqual([mockCharacters?.[0]]);
});

it('should add a comic to bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = addComicToFavorites(mockComics?.[0]);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.comics).toEqual([mockComics?.[0]]);
});

it('should add a story to bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = addStoryToFavorites(mockStories?.[0]);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.stories).toEqual([mockStories?.[0]]);
});

it('should delete one character from bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = removeCharacterOfFavorites(mockCharacters?.[1].id);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.characters).toEqual([]);
});

it('should delete one comic from bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = removeComicOfFavorites(mockComics?.[1].id);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.comics).toEqual([]);
});

it('should delete one story from bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = removeStoryOfFavorites(mockStories?.[1].id);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.stories).toEqual([]);
});

it('should delete all bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = removeAllFavorites();
  const newState = bookmarksReducer(previousState, action);
  expect(newState).toEqual({
    characters: [],
    comics: [],
    stories: [],
  });
});
