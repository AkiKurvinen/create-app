
import  {ScoreForm,ScoreFormSkeleton}  from './ScoreForm';

const meta = {
  title: 'organisms/ScoreForm',
  component: ScoreForm,
  tags: ['autodocs'],
};
export default meta
export const Preview = {
  args: {
    label: 'Any form label',
  },
};
export const LoggedIn = {
  args: {
    label: 'Any form label',
    loggedin: true
  },
};

export const Edit = {
  args: {
    label: 'Any form label',
    edit: true
  },
};
export const Loading = {
   render: () => <ScoreFormSkeleton />,
}
