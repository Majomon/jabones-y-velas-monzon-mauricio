import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemCount from './ItemCount';
import { useCart } from './CartContext';


export default function ItemDetail({ item }) {
  const [count, setCount] = useState(1)
  const [compra, setCompra] = useState(false)
  const { id, title, pictureUrl, price, description, alt, stock, initial } = item
  const { addItem } = useCart()

  const onAdd = (count) => {
    toast.success(`Agregaste al carrito ${count} 👌 `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    let purchase = {
      id,
      title,
      price,
      stock,
      pictureUrl,
      quantity: count
    }
    setCompra(true)
    addItem(purchase)
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className='prod-div'>
          <img src={pictureUrl} alt={alt} className="prod-img" />
          <div>
            <h2>{title}</h2>
            <h4>${price}</h4>
            <p>{description}</p>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} count={count} setCount={setCount} />
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}