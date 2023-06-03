import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  test('renders the logo component with the default sitename if not specified', () => {
    render(<Logo />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
    const strongElement = screen.getByText('Site Name');
    expect(strongElement).toBeInTheDocument();
  });

  test('renders the logo component with the specified sitename', () => {
    const sitename = 'My Site';
    render(<Logo sitename={sitename} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
    const strongElement = screen.getByText(sitename);
    expect(strongElement).toBeInTheDocument();
  });
});
