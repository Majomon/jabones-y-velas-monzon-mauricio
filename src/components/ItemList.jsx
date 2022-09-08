import React from 'react'
import Item from './Item'


const ItemList = ({listaProductos}) => {
  return (
    <>
    {listaProductos.map(product=><Item product={product}/>)}
    </>
  )
}

export default ItemList