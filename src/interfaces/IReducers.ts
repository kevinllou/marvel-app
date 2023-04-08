import HiddenResourcesType from './IHiddenResource';
import IResourcesType from './IResourcesType';

interface IReducers {
  bookmarksReducer: IResourcesType,
  hiddenResources: HiddenResourcesType
}

export default IReducers;
