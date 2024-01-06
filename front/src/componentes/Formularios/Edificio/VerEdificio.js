import React from 'react';
import Button from '@mui/material/Button';

const VerEdificio = () => {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px',
        margin: '0 auto',
    };

    const buttonStyle = {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#272829',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#F3EEEA',
        },
    };

    return (
        <div style={formStyle}>
            <Button variant="contained" style={buttonStyle} color="primary" onClick={null}>
                Ver por ID
            </Button>
            <Button variant="contained" style={buttonStyle} color="primary" onClick={null}>
                Ver por DNI
            </Button>
            <Button variant="contained" style={buttonStyle} color="primary" onClick={null}>
                Ver por UNIDAD
            </Button>
            <Button variant="contained" style={buttonStyle} color="primary" onClick={null}>
                Ver por EDIFICIO
            </Button>
        </div>
    );
};

export default VerEdificio;
