import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from "./MuiTheme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Hola mundo :D"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
