import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import {modificarReclamoService } from '../../../services/servicioReclamo';
import { Typography } from '@mui/material';


const ModificarReclamoForm = ({ reclamo }) => {
    const codReclamo = reclamo.numero;
    const [descripcion, setDescripcion] = useState(reclamo.descripcion);
    const [ubicacion, setUbicacion] = useState(reclamo.ubicacion);
    const [error, setError] = useState("")

    const handleAceptar = () => {
        modificarReclamoService(codReclamo,descripcion,ubicacion,setError);
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
    };

    const buttonStyle = {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#272829',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#F3EEEA',
        },
        marginBottom: '25px',
        marginTop: '39px'
    };

    return (
        <>
            <Typography variant='h6' style={{fontWeight:'bold'}}>Número: {reclamo.numero}</Typography>
            <div style={formStyle}>
                <TextField
                    label="DNI"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={reclamo.usuario.documento}
                    sx={textInputStyle}
                />
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                    <TextField
                        label="Codigo de edificio"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={reclamo.edificio.codigo}
                        sx={{ ...textInputStyle, flex: 1, alignSelf: 'flex-start' }}
                    />
                    <TextField
                        label="Piso"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={reclamo.unidad.piso}
                        sx={{ ...textInputStyle, flex: 1, alignSelf: 'center' }}
                    />
                    <TextField
                        label="Departamento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={reclamo.unidad.numero}
                        sx={{ ...textInputStyle, flex: 1, alignSelf: 'flex-e' }}
                    />
                </div>
                <TextField
                    label="Ubicacion"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    sx={textInputStyle}
                />
                <TextField
                    label="Descripcion"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    sx={textInputStyle}
                />
                <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                    Aceptar
                </Button>
            </div>
            {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px'}}>Error al modificar reclamo</Alert>}
            {error === "pass" && <Alert severity="success" variant='filled'sx={{marginBottom:'10px'}}>Reclamo <strong>{codReclamo}</strong> modificado con exito!</Alert>}
        </>
    );
};

export default ModificarReclamoForm;
