import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
/* import { ThemeProvider } from '@mui/material';
import theme from "./MuiTheme"
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import FetchContainer from './test/FetchContainer';
import ActividadPromesas from "./test/ActividadPromesas"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';




function App() {

  return (
    /*     <ThemeProvider theme={theme}>
          <div className="App">
            <FetchContainer />
    
            <ActividadPromesas />
            <NavBar />
            <ItemListContainer greeting="Hola Mundo" />
            <ItemDetailContainer />
          </div>
        </ThemeProvider> */

    <BrowserRouter>
      {/* Aqui van los componentes que estan presentes en todas las rutas */}
      <NavBar />

      <Routes>
        <Route path="/Inicio" element={<ItemListContainer />} />
        <Route path="/Productos/:id" element={<ItemListContainer />} />
        <Route path="/Detalle/:id" element={<ItemDetailContainer/>} />
      </Routes>

      {/* Aqui va el Footer, tambien afuera de las rutas*/}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
