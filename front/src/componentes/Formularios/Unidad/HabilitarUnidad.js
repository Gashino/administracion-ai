import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { habitarUnidadService } from '../../../services/servicioUnidad';


const HabilitarUnidad = ({ edificio, piso, unidad }) => {

    const [error, setError] = useState("")

    const handleAceptar = () => {
        habitarUnidadService(edificio,piso,unidad,setError)
    };

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
        marginBottom: '30px',
        marginTop: '39px'
    };

    return (
        <div style={formStyle}>
            <div>
                <h4>¿Habilitar la siguiente unidad?</h4>
                <p>Edificio: {edificio}</p>
                <p>Piso: {piso}</p>
                <p>Unidad: {unidad}</p>
            </div>
            <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                Aceptar
            </Button>
            {error === "error" && <Alert severity="error" variant='filled' sx={{mt:'225px'}}>Error al habitar unidad</Alert>}
            {error === "pass" && <Alert severity="success" variant='filled' sx={{mt:'225px'}}>Unidad habitada!</Alert>}
        </div>
    );
};

export default HabilitarUnidad
