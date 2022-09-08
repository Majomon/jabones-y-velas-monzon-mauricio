import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from '@mui/material';
import theme from "./MuiTheme"
import NavBar from "./components/NavBar";
/* import ItemListContainer from './components/ItemListContainer'; */
/* import FetchContainer from './test/FetchContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*         <FetchContainer/>
 */}
        {/*     <ActividadPromesas/> */}
        <NavBar />
{/*         <ItemListContainer greeting="Hola Mundo"/> */}
        <ItemDetailContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
