import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { modificarPersona } from '../../../services/servicioPersona';

const ModificarPersona = ({ user }) => {
    const [nombre, setNombre] = useState(user.nombre);
    const [mail, setMail] = useState(user.mail);
    const [dni, setDNI] = useState(user.documento);
    const [contrasenia, setContrasenia] = useState(user.contrasenia);
    const isAdmin = user.isAdmin
    const [error, setError] = useState("")

    const handleAceptar = () => {
        modificarPersona(nombre, mail, dni, contrasenia, isAdmin, setError)
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
                label="DNI"
                variant="outlined"
                fullWidth
                margin="normal"
                value={user.documento}
                onChange={(e) => setDNI(e.target.value)}
                sx={textInputStyle}
            />
            <TextField
                label="Correo"
                variant="outlined"
                fullWidth
                margin="normal"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                sx={textInputStyle}
            />
            <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={contrasenia}
                onChange={(e) => setContrasenia(e.target.value)}
                sx={textInputStyle}
            />
            <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                Aceptar
            </Button>
            {error === "error" && <Alert severity="error" variant='filled'>Error al modificar persona!</Alert>}
            {error === "pass" && <Alert severity="success" variant='filled'>Persona modificada!</Alert>}
        </div>
    );
};

export default ModificarPersona;
