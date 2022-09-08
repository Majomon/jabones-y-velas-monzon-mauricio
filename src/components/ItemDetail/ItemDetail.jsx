import React from 'react'
import Item from "../Item"

const ItemDetail = ({ producto }) => {
    return (
        <div>
            <h2>ItemDetail</h2>
            <Item product={producto} />
{/*             <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
            {/*             <div>Detalle del producto: {producto.name}</div>
            <div>Imagen del producto</div>
            <img src={producto.img} alt={producto.name} /> */}
        </div>
    )
}

export default ItemDetail