import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useCart } from './CartContext';

function CartItem({ item }) {
  const { removeItem } = useCart();
  return (

    <div className='cartItem'>
      <div className='cartItemCuadro'>
        <img src={item.pictureUrl} alt={item.title} className="thumb-img" />
        <div>
          <p>Articulo: <span>{item.title}</span></p>
          <p>Cantidad: <span>{item.quantity}</span></p>
          <p>Precio por unidad: <span>${item.price}</span></p>
        </div>
        <IconButton aria-label="delete" onClick={() => removeItem(item.id)}>
          <DeleteIcon fontSize="small" color="secondary" />
        </IconButton>
      </div>
    </div>

  )
}

export default CartItem