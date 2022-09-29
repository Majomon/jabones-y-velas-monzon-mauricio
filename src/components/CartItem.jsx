import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import { useCart } from './CartContext';
import { Divider } from '@mui/material';

function CartItem({ item }) {

  const { removeItem } = useCart();
  return (
    <Container>
      <div className='center'>
        <Stack direction="row" alignItems="center" justifyContent="space-between" divider={<Divider orientation="vertical" flexItem />}>
          <img src={item.pictureUrl} alt={item.title} className="thumb-img" />
          <p>Articulo: <span>{item.title}</span></p>
          <span>{item.quantity}</span>
          <span>${item.price}</span>
          <IconButton aria-label="delete" onClick={() => removeItem(item.id)}>
            <DeleteIcon fontSize="small" color="secondary" />
          </IconButton>
        </Stack>
      </div>
    </Container>
  )
}

export default CartItem