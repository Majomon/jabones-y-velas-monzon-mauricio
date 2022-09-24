import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Test from "./test/Test";
import GenericContext from "./test/GenericContext";
import TestAddToCart from "./test/TestAddToCart"



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
    <GenericContext>
      <BrowserRouter>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/test" element={<Test className="center" />} />
          <Route path="/TestAddToCart" element={<TestAddToCart className="center" />} />
          <Route path="/" element={<ItemListContainer className="center" />} />
          <Route path="/cart" element={<Cart className="center" />} />
          <Route path="/category/:idcategory" element={<ItemListContainer className="center" />} />
          <Route path="/product/:idproduct" element={<ItemDetailContainer className="center" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GenericContext>
  );
}

export default App;
