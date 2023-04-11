import { waitFor } from '@testing-library/react';
import { renderWithBrowserRouter } from '../components/utils/wrapper';
import StoriesGrid from '../components/Story/StoryGrid';

describe('Stories List Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render list of stories', async () => {
    const { container, getByText } = renderWithBrowserRouter(<StoriesGrid />);
    await waitFor(() => {
      expect(container.querySelector('.spinner')).not.toBeTruthy();
      expect(getByText(/Investigating the murder of a teenage girl/i)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
