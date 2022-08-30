import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {

  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    if (contador <= 0) {
      contador = 0
    } else {
      setContador(contador - 1)
    }
  }
  return (
    <div style={{
      backgroundColor: "#b2ebf2",
      padding: "5rem",
      margin: ".5rem",
      minHeight: "100vh"
    }}>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
        /*           image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana" */
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Producto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas!{/*  */}
          </Typography>
        </CardContent>
        <CardActions style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <Button size="small" onClick={restar}>-</Button>
          <div>
            <button>Comprar</button>
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
