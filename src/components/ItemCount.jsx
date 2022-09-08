import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial)

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }
  return (
    <div>

      <Card sx={{ maxWidth: 345 }}>
      <CardActions style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <Button size="small" onClick={restar}>-</Button>
          <div>
            <button onClick={onAdd}>Agregar al carrito</button>
            <div>
              <span>Cantidad: {contador}</span>
            </div>
          </div>
          <Button size="small" onClick={sumar}>+</Button>
        </CardActions>
      </Card>
    </div>
  );

}

export default ItemCount;
