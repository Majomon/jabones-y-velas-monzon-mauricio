import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext"
import Checkout from "./components/Checkout";




function App() {

  return (
    <CartProvider>
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
          <Route path="/" element={<ItemListContainer className="center flex-wrap" />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/category/:idcategory" element={<ItemListContainer className="center" />} />
          <Route path="/product/:idproduct" element={<ItemDetailContainer className="center" />} />
          <Route path="/cart" element={<Cart className="center" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


/*   
<ThemeProvider theme={theme}>
      <div className="App">
        <FetchContainer />
    
        <ActividadPromesas />
        <NavBar />
        <ItemListContainer greeting="Hola Mundo" />
      <ItemDetailContainer />
    </div>
  </ThemeProvider>
   */