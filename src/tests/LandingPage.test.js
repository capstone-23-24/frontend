import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../components/pages/LandingPage';
import axios from '../api/services';

jest.mock('../../api/services', () => ({
  getPosts: jest.fn(() => Promise.resolve([])),
}));

test('renders LandingPage component', () => {
  const { container } = render(<LandingPage />);
  expect(container).toBeInTheDocument();
});
