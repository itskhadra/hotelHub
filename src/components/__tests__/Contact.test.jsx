import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Contact from '../Contact';

test('shows the contact information', () => {
  render(<Contact />);

  expect(screen.getByText('Contact Us')).toBeInTheDocument();
  expect(screen.getByText('Email: info@hotelhub.com')).toBeInTheDocument();
});
