import { render, screen, waitFor } from '@testing-library/react';
import { configure } from '@testing-library/react'
import App from './App';
export const test_config = {
  testIdAttribute: 'data-my-test-attribute',
  asyncUtilTimeout: 5000
}
configure(test_config)

test('renders learn react link', async () => {
  render(<App />);
  let edit_name_btn

  await waitFor(() => {
    edit_name_btn = screen.getByTestId('edit-name')
    expect(edit_name_btn).not.toBeDisabled()
  })

  await waitFor(() => {
    expect(edit_name_btn).toHaveTextContent('Edit')
  })

  //  await waitFor(() => { expect(screen.getByTestId('edit-name')).not.toBeDisabled() }, { timeout: 5000 })
});
