import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import products from './products';
import { customFetch } from './customFetch';

const ItemListContainer = (props) => {
  const { greeting } = props
  const [listaProductos, setlistaProductos] = useState([]);


  useEffect(() => {
    customFetch(products)
      .then(data => setlistaProductos(data))

  }, [])

  return (
    <>
      <div>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }}
        >
          <p>{greeting}</p>
        </Typography>

      </div>
      <ItemList listaProductos={listaProductos}/>
      
    </>
  )
}

export default ItemListContainer