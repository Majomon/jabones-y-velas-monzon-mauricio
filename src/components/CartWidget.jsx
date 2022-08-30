import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartWidget = ({ counter }) => {
    return (
        <div>
            <span><LocalMallIcon color="secondary" fontSize='large'/></span>
            <span>{counter}</span>
        </div>
    )
}

export default CartWidget