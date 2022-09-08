import React, { useState, useEffect } from 'react'
import { data } from '../../mocks/DataBase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    data
    .then((res)=>setProducto(res[3]))
  })


  return (
    <div>
      <ItemDetail producto={producto} />
{/*       <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}
    </div>
  )
}

export default ItemDetailContainer
