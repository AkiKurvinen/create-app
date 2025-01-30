
import  {CharacterForm, CharacterFormSkeleton}  from './CharacterForm';

const meta = {
  title: 'organisms/CharacterForm',
  component: CharacterForm,
  tags: ['autodocs'],
};
export default meta
export const Preview = {
  args: {
    label: 'Any form label',
    charactername: 'Test Name'
  },
};
export const LoggedIn = {
  args: {
    label: 'Any form label',
    charactername: 'Test Name',
    loggedin: true
  },
};

export const Edit = {
  args: {
    label: 'Any form label',
    tempcharname: 'Test Name',
    edit: true
  },
};
export const Loading = {
   render: () => <CharacterFormSkeleton />,
}
