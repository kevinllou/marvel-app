import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutRoute from './LayoutRoute';
import ROUTES from './routes';
import Home from '../pages/Home/Home';
import Characters from '../pages/Characters/Characters';

function MarvelRoutes() {
  return (
    <BrowserRouter>
      <LayoutRoute>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CHARACTERS} element={<Characters />} />
          {/*
          <Route path={ROUTES.CHARACTERS_ID} element={<CharacterId />} />
          <Route path={ROUTES.COMICS} element={<Comics />} />
          <Route path={ROUTES.COMICS_ID} element={<ComicId />} />
          <Route path={ROUTES.STORIES} element={<Stories />} />
          <Route path={ROUTES.STORIES_ID} element={<StorieId />} />
          <Route path={ROUTES.BOOKMARKS} element={<Bookmark />} />
          <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </LayoutRoute>
    </BrowserRouter>
  );
}

export default MarvelRoutes;
