import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { agregarPersona } from '../../../services/servicioPersona';
import { eliminarServicioService } from '../../../services/servicioEdificio';


const EliminarEdificio = ({ user , edificio}) => {
    const [idEdificio, setIdEdificio] = useState('');
    const [error, setError] = useState("")

    const handleAceptar = () => {
        eliminarServicioService(edificio.codigo,setError)

    };

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
                label="idEdificio"
                variant="outlined"
                fullWidth
                margin="normal"
                value={edificio.codigo}
                onChange={(e) => setIdEdificio(e.target.value)}
                sx={textInputStyle}
            />
            <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                Aceptar
            </Button>
            {error === "error" && <Alert severity="error" variant='filled'>Error eliminando edificio</Alert>}
            {error === "pass" && <Alert severity="success" variant='filled'>Edificio eliminado!</Alert>}
        </div>
    );
};

export default EliminarEdificio;