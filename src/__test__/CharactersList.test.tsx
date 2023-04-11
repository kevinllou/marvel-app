import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterGrid from '../components/Character/CharacterGrid';
import { renderWithBrowserRouter, renderWithMemoryRouter } from '../components/utils/wrapper';
import ROUTES from '../routes/routes';

describe('Characters List Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render list of characters', async () => {
    const { container, getByText } = renderWithBrowserRouter(<CharacterGrid />);
    await waitFor(() => {
      expect(container.querySelector('.spinner')).not.toBeTruthy();
      expect(getByText('3-D Man')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  it('should search for hulk in the search bar', async () => {
    renderWithMemoryRouter([`${ROUTES.CHARACTERS}`]);
    await screen.findByText(/3-D Man/i);
    const searchBar = screen.getByPlaceholderText(/Search/i);
    userEvent.type(searchBar, 'Hulk{enter}');
    userEvent.click(screen.getByText('Filter'));

    await waitFor(
      () => {
        expect(screen.queryByText(/Hulk/i)).toBeInTheDocument();
        expect(screen.queryByText(/3-D Man/i)).toBeNull();
      },
    );

    userEvent.type(searchBar, '{backspace}{backspace}{backspace}{backspace}{enter}');
    userEvent.click(screen.getByText('Filter'));

    await waitFor(
      () => {
        expect(screen.queryByText(/Hulk/i)).toBeNull();
        expect(screen.queryByText(/3-D Man/i)).toBeInTheDocument();
      },
    );
  });

/*   it('should redirect to characters details', async () => {
    const { container } = renderWithMemoryRouter(['/characters']);
    const card = await screen.findByText(/3-D Man/i);
    userEvent.click(card);
    await waitFor(() => {
      expect(screen.queryByText('3-D Man')).toBeInTheDocument();
      expect(screen.queryByText('Like')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  }); */
});
