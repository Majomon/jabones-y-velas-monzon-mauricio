import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from '@mui/material';
import theme from "./MuiTheme"
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";
/* import FetchContainer from './test/FetchContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

  const onAdd = () => {
    console.log("Agregaste al carrito");
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*         <FetchContainer/>
 */}
        {/*     <ActividadPromesas/> */}
        <NavBar />
        <ItemListContainer greeting="Hola Mundo"/>
        <ItemDetailContainer/>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </ThemeProvider>
  );
}

export default App;
