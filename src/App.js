import { CharacterFormController } from './components/organisms/CharacterFormController.jsx'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const customTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#75196f'
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CharacterFormController />
      </ThemeProvider>
    </div>
  );
}

export default App;
