import { render, screen } from '@testing-library/react';
import { configure } from '@testing-library/dom'
import App from './App';
configure({
  testIdAttribute: 'data-my-test-attribute'
})
test('renders learn react link', () => {

  render(<App />);
  const linkElement = screen.getByTestId('thebutton')
  expect(linkElement).toBeDisabled();
});
