
import { render, screen, cleanup } from '@testing-library/react';
import { test, expect, afterEach } from 'vitest';
import Navbar from '../Navbar';

afterEach(() => {
  cleanup();
});

test('shows the HotelHub name', () => {
  render(<Navbar />);
  expect(screen.getByText('HotelHub')).toBeInTheDocument();
});

test('shows the navigation links', () => {
  render(<Navbar />);

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Rooms')).toBeInTheDocument();
  expect(screen.getByText('Facilities')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Booking')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
