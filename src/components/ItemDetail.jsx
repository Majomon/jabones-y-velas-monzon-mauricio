import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemCount from './ItemCount';
import { useCart } from './CartContext';


export default function ItemDetail({ item }) {
  const [cant, setCant] = useState(1)
  const { id, title, pictureUrl, price, description, alt, stock, initial } = item
  const { addItem } = useCart()

  const onAdd = (cant) => {
    toast.success(`Agregaste al carrito ${cant} 👌 `, {
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
      quantity: cant
    }
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
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} count={cant} setCount={setCant} />
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}