import React from 'react'
//import { useContext } from 'react'
//import { CartContext } from './CartContext'
import { useCart } from './CartContext';

function Cart() {
  //Forma larga de context
  //const {cart}=useContext(CartContext)
  const {cart}=useCart()
  console.log("Carrito",cart);
  return (
    <div className='center'>
      <div className='outlined'>
        <h2>Tu Carrito</h2>
      </div>
    </div>
  )
}

export default Cart