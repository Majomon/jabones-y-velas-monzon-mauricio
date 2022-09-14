import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink}   from 'react-router-dom'; 

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `0px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
    return (
    <IconButton aria-label="cart" component={RouterLink} to={`/cart`}>
      <StyledBadge badgeContent={2} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}