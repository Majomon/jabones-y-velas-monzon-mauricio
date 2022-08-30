import React from 'react'
import Typography from '@mui/material/Typography';

const ItemListContainer = (props) => {
  const { greeting } = props
  return (
    <div>
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

    </div>
  )
}

export default ItemListContainer