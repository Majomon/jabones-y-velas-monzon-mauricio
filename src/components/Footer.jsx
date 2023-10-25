import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const Footer = () => {

    return (
        <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl">
                <Typography
                    variant="body1"
                    noWrap
                    sx={{
                        mr: 2,
                        flexGrow: 1,
                        color: 'white',
                        textDecoration: 'none',
                        textAlign: 'center',
                        minHeight: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Jabones y velas artesanales. © By Mabe 2022.
                </Typography>

            

            </Container>
        </AppBar>
    );
};
export default Footer;
