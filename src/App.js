import { ScoreFormController } from './components/organisms/ScoreFormController.jsx'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#751944'
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ScoreFormController />
      </ThemeProvider>
    </div>
  );
}

export default App;
