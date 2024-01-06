import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { alquilarUnidadService } from '../../../services/servicioUnidad';


const AlquilarUnidad = ({edificio,piso,unidad}) => {

    const [dni, setDNI] = useState('');
    const [error, setError] = useState(null)

    const handleAceptar = () => {
        alquilarUnidadService(edificio,piso,unidad,dni,setError);
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px',
        margin: '0 auto',
    };

    const textInputStyle = {
        width: '100%',
        marginBottom: '1.5rem',
        marginTop: '1.5rem',
    };

    const buttonStyle = {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#272829',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#F3EEEA',
        },
        marginBottom: '30px',
        marginTop: '39px'
    };

    return (
        <div style={formStyle}>
            <TextField
                label="DNI"
                variant="outlined"
                fullWidth
                margin="normal"
                value={dni}
                onChange={(e) => setDNI(e.target.value)}
                sx={textInputStyle}
            />
            <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                Aceptar
            </Button>
            {error === "error" && <Alert severity="error" variant='filled'sx={{mt:'300px'}}>Error al alquilar</Alert>}
            {error === "pass" && <Alert severity="success" variant='filled'sx={{mt:'300px'}}>Unidad alquilada </Alert>}
        </div>
    );
};

export default AlquilarUnidad

