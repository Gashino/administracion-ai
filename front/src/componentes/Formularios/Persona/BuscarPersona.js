import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ModificarPersona from './ModificarPersona';
import { Alert } from '@mui/material';
import { buscarPersonaDni } from '../../../services/servicioPersona';


const BuscarPersona = () => {
    const [dni, setDNI] = useState('');
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")

    const handleAceptar = () => {
        buscarPersonaDni(dni, setUser, setError)
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
    };

    return (
        <div style={formStyle}>
            {user === null ? (
                <>
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
                    {error === "error" &&
                        <Alert severity="error" variant='filled' sx={{ marginTop: '350px' }}>
                            Persona inexistente - <strong>Verificar DNI</strong>
                        </Alert>
                    }
                </>
            ) : (
                <ModificarPersona user={user}></ModificarPersona>
            )}

        </div>
    );
};

export default BuscarPersona;
