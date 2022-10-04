import { render, screen } from '@testing-library/react';
import App from './App';

test('renders code green header', () => {
  render(<App />);
  const headerElement = screen.getByText(/code green/i);
  const subHeadElement = screen.getByText(/Message Board for the Engineering Department of Acme AgroSystems, Inc./)
  expect(headerElement).toBeInTheDocument();
  expect(subHeadElement).toBeInTheDocument();
});
