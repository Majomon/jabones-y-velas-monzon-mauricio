import { createContext,useContext,useState} from "react";

export const CartContext = createContext();

export default function CartProvider ({children}){
    const [cart]= useState([])

    return (
        <CartContext.Provider value={{cart}}>
           {children}
        </CartContext.Provider>
    )
}
 export const useCart=()=> useContext(CartContext)

  