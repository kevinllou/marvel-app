import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import MarvelRoutes from '../../routes/MarvelRoutes';

const renderWithBrowserRouter = (component: ReactElement) => render(
  <Provider store={store}>
    <BrowserRouter>{component}</BrowserRouter>
  </Provider>,
);

const renderWithMemoryRouter = (path: string[] = ['/']) => render(
  <Provider store={store}>
    <MemoryRouter initialEntries={path}>
      <MarvelRoutes />
    </MemoryRouter>
  </Provider>,
);

export {
  renderWithBrowserRouter,
  renderWithMemoryRouter,
};
