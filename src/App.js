import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from '@mui/material';
import theme from "./MuiTheme"
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount"



function App() {

  const onAdd = () => {
    console.log("Agregaste al carrito");
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Hola mundo :D"
        />
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </ThemeProvider>
  );
}

export default App;
