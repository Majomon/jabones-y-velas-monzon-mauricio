import React, { useState, useEffect } from 'react'
import { data } from '../../mocks/DataBase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
    .then((res)=>setProducto(res.find((item)=>item.id===1)))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  })


  return (
    <div>
      {loading?<p>Loading...</p> : <ItemDetail producto={producto} />}
{/*       <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}
    </div>
  )
}

export default ItemDetailContainer
