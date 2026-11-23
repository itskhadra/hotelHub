import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import RoomCard from '../RoomCard';

test('shows room information and booking button', () => {
  render(
    <RoomCard
      name="Deluxe Room"
      image="room.jpg"
      description="A comfortable room"
      price="100"
      onBook={vi.fn()}
    />
  );

  expect(screen.getByText('Deluxe Room')).toBeInTheDocument();
  expect(screen.getByText('A comfortable room')).toBeInTheDocument();
  expect(screen.getByText('100 per night')).toBeInTheDocument();
  expect(screen.getByText('Choose Room')).toBeInTheDocument();
});
