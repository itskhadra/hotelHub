import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { test, expect, vi, afterEach } from 'vitest';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Login from '../Login';

afterEach(() => {
  cleanup();
});

vi.mock('../../firebase', () => ({
  auth: {},
}));

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(() => Promise.resolve()),
}));

test('shows the login form', () => {
  render(<Login />);

  expect(screen.getByText('Welcome Back')).toBeInTheDocument();
  expect(screen.getByText('Sign In')).toBeInTheDocument();
});

test('logs in with email and password', async () => {
  render(<Login />);

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'student@example.com' },
  });

  fireEvent.change(document.querySelector('input[type="password"]'), {
    target: { value: 'password123' },
  });

  fireEvent.click(screen.getByRole('button', { name: 'Sign In' }));

  await waitFor(() => {
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
    expect(screen.getByText('Login successful!')).toBeInTheDocument();
  });
});
