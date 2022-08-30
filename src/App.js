import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from "./MuiTheme"
import Productos from "./components/Productos"
import NavBar from "./components/NavBar";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Hola mundo :D"
        />
        <Productos />
      </div>
    </ThemeProvider>
  );
}

export default App;
