import React, { useState, useEffect } from 'react'
/* import Typography from '@mui/material/Typography'; */
import ItemList from './ItemList';
import { data } from "../mocks/DataBase"

const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setlistaProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    data
      .then((res) => setlistaProductos(res))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
  }, [])

  
  return (

    <>
      <div>
{/*         <div>
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

        </div> */}
        <div className='cardContainer'>
          {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos} />}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer