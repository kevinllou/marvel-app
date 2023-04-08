import HiddenResourcesType from './IHiddenResource';
import IResourcesType from './IResourcesType';

interface IReducers {
  bookmarksReducer: IResourcesType,
  hiddenReducer: HiddenResourcesType
}

export default IReducers;
