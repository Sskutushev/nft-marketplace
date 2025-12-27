import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders logo and text', () => {
    render(<Footer />);

    // Check that at least one element with 'DiveSea' text exists
    expect(screen.getAllByText('DiveSea')).toHaveLength(2); 
    expect(screen.getAllByText(/© 2023 DiveSea All Rights Reserved/i)).toHaveLength(2); 

  });

  it('renders all navigation links', () => {
    render(<Footer />);

    // Check that navigation links exist in both desktop and mobile versions
    expect(screen.getAllByText('Privacy Policy')).toHaveLength(2);
    expect(screen.getAllByText('Term & Conditions')).toHaveLength(2);
    expect(screen.getAllByText('About Us')).toHaveLength(2);
    expect(screen.getAllByText('Contact')).toHaveLength(2);

  });

  it('renders social media icons', () => {
    render(<Footer />);

    const socialIcons = screen.getAllByRole('link', { name: /instagram|linkedin|facebook|twitter/i });
    expect(socialIcons.length).toBeGreaterThan(0);

  });
});