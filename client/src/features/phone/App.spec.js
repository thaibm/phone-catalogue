import React from 'react';
import { MemoryRouter, useRoutes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText('Add phone')).toBeInTheDocument();
});
