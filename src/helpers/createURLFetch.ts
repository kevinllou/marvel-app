import API_KEY from '../constants/api_backend_url';
import ENDPOINTS from '../constants/endpoints';
import IURLParams from '../interfaces/IURLParams';

type MarvelType = 'comics' | 'characters' | 'stories';
type MarvelTypeId = 'comic_id' | 'character_id' | 'story_id';
type MarvelDetails = 'comicCharacters' | 'comicStories' | 'characterStories' | 'characterComics' | 'storyCharacters' | 'storyComics';

const createURLFetch = (
  params: IURLParams,
  type: MarvelType | MarvelTypeId | MarvelDetails,
  id?: number,
):string => {
  const {
    nameStartsWith, comicParam, storyParam, characterParam, formatParam, titleParam, page,
  } = params;
  const name = nameStartsWith ? `nameStartsWith=${nameStartsWith}&` : '';
  const comic = comicParam ? `comics=${comicParam}&` : '';
  const character = characterParam ? `characters=${characterParam}&` : '';
  const story = storyParam ? `stories=${storyParam}&` : '';
  const currentPage = page || '1';
  const offset = `offset=${page === '1' ? '0' : (Number(currentPage) * 20).toString()}&`;
  const limit = 'limit=20&';
  const title = titleParam ? `title=${titleParam}&` : '';
  const format = formatParam ? `format=${formatParam}&` : '';

  const fetchObject = {
    characters: `${ENDPOINTS.characters}?${comic}${story}${name}${offset}${limit}${API_KEY}`,
    character_id: `${ENDPOINTS.characters}/${id}?${API_KEY}`,
    characterStories: `${ENDPOINTS.characters}/${id}/stories?${API_KEY}`,
    characterComics: `${ENDPOINTS.characters}/${id}/comics?${API_KEY}`,
    comics: `${ENDPOINTS.comics}?${title}${format}${offset}${limit}${API_KEY}`,
    comic_id: `${ENDPOINTS.comics}/${id}?${API_KEY}`,
    comicCharacters: `${ENDPOINTS.comics}/${id}/characters?${API_KEY}`,
    comicStories: `${ENDPOINTS.comics}/${id}/stories?${API_KEY}`,
    stories: `${ENDPOINTS.stories}?${character}${offset}${limit}${API_KEY}`,
    storyCharacters: `${ENDPOINTS.stories}/${id}/characters?${API_KEY}`,
    storyComics: `${ENDPOINTS.stories}/${id}/comics?${API_KEY}`,
    story_id: `${ENDPOINTS.stories}/${id}?${API_KEY}`,
  };

  return fetchObject[type];
};

export default createURLFetch;
