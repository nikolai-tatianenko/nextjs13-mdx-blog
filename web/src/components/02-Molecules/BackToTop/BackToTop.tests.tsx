import { fireEvent, render } from '@testing-library/react';
import BackToTop from './BackToTop';

describe('BackToTop', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders two BackToTopButton components', () => {
    const { getAllByRole } = render(<BackToTop />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('scrolls to top when "Scroll to Top" button is clicked', () => {
    const { getByText } = render(<BackToTop />);
    const scrollToTopButton = getByText('Scroll to Top');
    fireEvent.click(scrollToTopButton);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('scrolls to bottom when "Scroll to Bottom" button is clicked', () => {
    const { getByText } = render(<BackToTop />);
    const scrollToBottomButton = getByText('Scroll to Bottom');
    fireEvent.click(scrollToBottomButton);

    const fullHeight = document.documentElement.scrollHeight;
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: fullHeight,
      behavior: 'smooth',
    });
  });
});
