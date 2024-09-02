import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to My App/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders paragraph text', () => {
    render(<App />);
    const paragraphElement = screen.getByText(/This is a simple React app./i);
    expect(paragraphElement).toBeInTheDocument();
  });
});