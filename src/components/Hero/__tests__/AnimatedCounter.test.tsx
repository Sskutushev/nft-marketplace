import { render, screen, act } from '@testing-library/react';
import AnimatedCounter from '../AnimatedCounter';

// Mock requestAnimationFrame
global.requestAnimationFrame = (callback: FrameRequestCallback) => {
  return setTimeout(() => callback(Date.now()), 0) as any;
};

global.cancelAnimationFrame = (id: number) => {
  clearTimeout(id);
};

describe('AnimatedCounter', () => {
  it('renders counter with suffix', async () => {
    render(<AnimatedCounter end={100} suffix="K+" duration={100} />);

    // Wait for animation to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150));
    });

    expect(screen.getByText(/K\+/)).toBeInTheDocument();
  });

  it('animates to end value', async () => {
    const { container } = render(<AnimatedCounter end={100} duration={100} />);

    // Wait for animation to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150));
    });

    expect(container.textContent).toBe('100');
  });
});