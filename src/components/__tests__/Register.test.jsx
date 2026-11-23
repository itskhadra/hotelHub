import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Register from '../Register';

test('shows the registration form', () => {
  render(<Register />);

  expect(screen.getByText('Create Your Account')).toBeInTheDocument();
  expect(screen.getByText('Full Name')).toBeInTheDocument();
  expect(screen.getByText('Email Address')).toBeInTheDocument();
  expect(screen.getByText('Password')).toBeInTheDocument();
  expect(screen.getByText('Create Account')).toBeInTheDocument();
});
