import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from './ItemCount';

const Item = ({ product }) => {
  const onAdd = () => {
    console.log("Agregaste al carrito");
  }
  return (
    <div style={{
      width: "350px",
      padding: "1.5rem",
      border: "solid 1px black",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descripcion del producto {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <p>Stock: {product.stock}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      </Card>
    </div>

  );
}

export default Item