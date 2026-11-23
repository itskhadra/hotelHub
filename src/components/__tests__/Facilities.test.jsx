import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Facilities from '../Facilities';

test('shows all hotel facilities', () => {
  render(<Facilities />);

  expect(screen.getByText('Our Facilities')).toBeInTheDocument();
  expect(screen.getByText('Swimming Pool')).toBeInTheDocument();
  expect(screen.getByText('Restaurant')).toBeInTheDocument();
  expect(screen.getByText('Gym')).toBeInTheDocument();
  expect(screen.getByText('Spa')).toBeInTheDocument();
});
