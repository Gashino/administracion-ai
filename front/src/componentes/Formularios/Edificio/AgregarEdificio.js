import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { agregarPersona } from '../../../services/servicioPersona';
import { agregarEdificioService } from '../../../services/servicioEdificio';


const AgregarEdificio = ({ user }) => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [error, setError] = useState(null)

    const handleAceptar = () => {
        agregarEdificioService(nombre,direccion,setError)

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
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                sx={textInputStyle}
            />
            <TextField
                label="Direccion"
                variant="outlined"
                fullWidth
                margin="normal"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                sx={textInputStyle}
            />
            <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                Aceptar
            </Button>
            {error === "pass" && <Alert severity="success" variant='filled'>edificio agregado</Alert>}
            {error === "error" && <Alert severity="error" variant='filled'>error al agregar edificio</Alert>}
        </div>
    );
};

export default AgregarEdificio;