import { render, screen, waitFor } from "@testing-library/react";
import { CharacterForm } from './CharacterForm'
import { configure } from '@testing-library/react'
import { test_config } from '../../../App.test'
configure(test_config)

describe('AddWord component', () => {
    it('should display character name text', () => {
        render(<CharacterForm />);
        screen.getByTestId('char-name')
    });

    it('should display character name edit button', () => {
        render(<CharacterForm loggedin={true} />);
        screen.getByTestId('char-name')
        const edit_name_btn = screen.getByTestId('edit-name')
        expect(edit_name_btn).not.toBeDisabled()
    });

    it('should display character name edit text field', () => {
        render(<CharacterForm edit={true} />);
        // element not in document
        expect(() => screen.getByTestId('char-name')).toThrow();

        const edit_name_input = screen.getByTestId('char-name-input')
        const save_changes_btn = screen.getByTestId('save-changes')
        expect(edit_name_input).not.toBeDisabled()
        expect(save_changes_btn).not.toBeDisabled()
    });

});
