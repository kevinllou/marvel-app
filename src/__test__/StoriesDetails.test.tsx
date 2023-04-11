import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithMemoryRouter } from '../components/utils/wrapper';

describe('Stories details page', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should render details component', async () => {
    const { container } = renderWithMemoryRouter(['/stories/2326']);
    await waitFor(() => {
      expect(container.querySelector('.spinner')).not.toBeTruthy();
      expect(screen.getByText(/Jennifer Walters seeks the one person on Earth who can help control her transformations/i)).toBeInTheDocument();
      expect(screen.getByText('Like')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
  it('should add the stories to favorites', async () => {
    const { container } = renderWithMemoryRouter(['/stories/2326']);
    await waitFor(() => {
      expect(container.querySelector('.spinner')).not.toBeTruthy();
    });
    const likeButton = screen.queryByTestId('icon-heart');
    expect(likeButton?.style.backgroundColor).toBe('red');
    if (likeButton) {
      fireEvent.click(likeButton, { click: 0 });
    }
    expect(likeButton?.style.backgroundColor).toBe('grey');
  });
  test('should hide the story', async () => {
    const { container } = renderWithMemoryRouter(['/stories/2326']);

    await waitFor(() => {
      expect(container.querySelector('.spinner')).not.toBeTruthy();
    });

    const hideButton = screen.queryByTestId('icon-hide');
    expect(hideButton?.style.backgroundColor).toBe('red');
    if (hideButton) {
      fireEvent.click(hideButton, { click: 0 });
    }
    expect(hideButton?.style.backgroundColor).toBe('grey');
  });
});
