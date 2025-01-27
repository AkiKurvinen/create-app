import { render, screen, waitFor } from '@testing-library/react';
import { configure } from '@testing-library/dom'
import App from './App';
configure({
  testIdAttribute: 'data-my-test-attribute',
  asyncUtilTimeout: 5000
})

test('renders learn react link', async () => {
  render(<App />);
  await waitFor(() => {
    const elem = screen.getByTestId('edit-name')
    expect(elem).not.toBeDisabled()
    expect(elem).toHaveTextContent('Edit')
  })
  //  await waitFor(() => { expect(screen.getByTestId('edit-name')).not.toBeDisabled() }, { timeout: 5000 })
});
