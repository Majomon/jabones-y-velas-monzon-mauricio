import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
/* import ItemCount from './ItemCount'; */

const Item = ({ product }) => {

  const {id,name,description,stock,price,img,alt}=product
  const navegar=useNavigate()
  return (
    <div className='cardItem'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descripcion del producto {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div>
          <p>Precio: ${price}</p>
          <p>Stock: {stock}</p>
          <Button size="small" onClick={()=>navegar(`/detalle/${id}`)}>Ver mas</Button>
        </div>
        {/*         <ItemCount stock={product.stock} initial={1} onAdd={onAdd} /> */}
      </Card>
    </div>

  );
}

export default Item