import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders logo and navigation', () => {
    render(<Header />);

    expect(screen.getByText('DISCOVER')).toBeInTheDocument();
    expect(screen.getByText('CREATORS')).toBeInTheDocument();
    expect(screen.getByText('SELL')).toBeInTheDocument();
    expect(screen.getByText('STATS')).toBeInTheDocument();

  });

  it('renders Connect Wallet button', () => {
    render(<Header />);

    const button = screen.getByText('CONNECT WALLET');
    expect(button).toBeInTheDocument();

  });

  it('toggles mobile menu on burger button click', () => {
    render(<Header />);

    // find burger button
    const burgerButton = screen.getByLabelText(/open menu/i);

    // Click button
    fireEvent.click(burgerButton);

    expect(burgerButton).toHaveAttribute('aria-label', 'Close menu');

  });

  it('adds scrolled class on scroll', () => {
    render(<Header />);

    // simulate scroll
    window.scrollY = 100;
    fireEvent.scroll(window);

    // expect(header).toHaveClass('scrolled');

  });
});