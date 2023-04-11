import mockCharacters from '../mocks/mockCharacters';
import mockComics from '../mocks/mockComics';
import mockStories from '../mocks/mockStories';
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
  const action = addCharacterToFavorites(mockCharacters.data.results?.[0]);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.characters).toEqual([mockCharacters.data.results?.[0]]);
});

it('should add a comic to bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = addComicToFavorites(mockComics.data.results?.[0]);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.comics).toEqual([mockComics.data.results?.[0]]);
});

it('should add a story to bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = addStoryToFavorites(mockStories.data.results?.[0]);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.stories).toEqual([mockStories.data.results?.[0]]);
});

it('should delete one character from bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = removeCharacterOfFavorites(mockCharacters.data?.results?.[1].id);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.characters).toEqual([]);
});

it('should delete one comic from bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = removeComicOfFavorites(mockComics.data.results?.[1].id);
  const newState = bookmarksReducer(previousState, action);
  expect(newState.comics).toEqual([]);
});

it('should delete one story from bookmarks', () => {
  const previousState: IResourcesType = {
    characters: [],
    comics: [],
    stories: [],
  };
  const action = removeStoryOfFavorites(mockStories.data.results?.[1].id);
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
