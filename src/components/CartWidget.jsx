import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartWidget = ({ counter }) => {
    return (
        <div style={{
            backgroundColor: "white", borderRadius: "20%", width: "100%", padding: ".3rem"
        }}>
            <span><LocalMallIcon color="secondary" fontSize='large' /></span>
            <span>{counter}</span>
        </div>
    )
}

export default CartWidget