import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import { data } from "../mocks/DataBase"

const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setlistaProductos] = useState([]);
  const [cargando, setCargando] = useState();


  useEffect(() => {
    data
      .then((res) => setlistaProductos(res))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
  }, [])
  console.log(listaProductos);
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
      <div>

        {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos} />}

      </div>

    </>
  )
}

export default ItemListContainer