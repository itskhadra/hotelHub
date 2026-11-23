
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import About from '../About';

test('shows the About Us heading and description', () => {
  render(<About />);

  expect(screen.getByText('About Us')).toBeInTheDocument();
  expect(screen.getByText('HotelHub offers comfortable rooms and friendly service.')).toBeInTheDocument();
});
