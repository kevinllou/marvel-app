import { waitFor } from '@testing-library/react';
import { renderWithBrowserRouter } from '../components/utils/wrapper';
import ComicGrid from '../components/Comic/ComicGrid';

describe('Characters List Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render list of comics', async () => {
    const { container, getByText } = renderWithBrowserRouter(<ComicGrid />);
    await waitFor(() => {
      expect(container.querySelector('.spinner')).not.toBeTruthy();
      expect(getByText(/Marvel Previews/i)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
