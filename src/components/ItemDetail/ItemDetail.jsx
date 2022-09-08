import React from 'react'
import Item from "../Item"
import ItemCount from '../ItemCount'

const ItemDetail = ({ producto }) => {
    const onAdd =()=>{
        console.log("Agregaste al carrito");
    }

    return (
        <div>
            <h2>ItemDetail</h2>
            <Item product={producto} />
{/*             <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
            {/*             <div>Detalle del producto: {producto.name}</div>
            <div>Imagen del producto</div>
            <img src={producto.img} alt={producto.name} /> */}
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail