import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { crearReclamoService } from '../../../services/servicioReclamo';


const CrearReclamo = ({ user }) => {
    const [dni, setDNI] = useState("");
    const [codEdificio, setCodEdificio] = useState("");
    const [piso, setPiso] = useState("");
    const [depto, setDepto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [error, setError] = useState("")
    const [codReclamo,setCodReclamo] = useState("")

    const handleAceptar = () => {
        if(user.isAdmin){
            crearReclamoService(dni,codEdificio,piso,depto,descripcion,ubicacion,setError,setCodReclamo)
        }
        else{
            crearReclamoService(user.documento,codEdificio,piso,depto,descripcion,ubicacion,setError,setCodReclamo)
        }
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
        marginBottom: '25px',
        marginTop: '39px'
    };

    return (
        <>
            <div style={formStyle}>
                {user.isAdmin==true ? (
                <TextField
                    label="DNI"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={dni}
                    onChange={(e) => setDNI(e.target.value)}
                    sx={textInputStyle}
                />) 
                : (
                    <TextField
                    label="DNI"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={user.documento}
                    onChange={(e) => setDNI(user.documento)}
                    sx={textInputStyle}/>
                )}
                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                    <TextField
                        label="Codigo de edificio"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={codEdificio}
                        onChange={(e) => setCodEdificio(e.target.value)}
                        sx={{ ...textInputStyle, flex: 1, alignSelf: 'flex-start' }}
                    />
                    <TextField
                        label="Piso"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={piso}
                        onChange={(e) => setPiso(e.target.value)}
                        sx={{ ...textInputStyle, flex: 1, alignSelf: 'center' }}
                    />
                    <TextField
                        label="Departamento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={depto}
                        onChange={(e) => setDepto(e.target.value)}
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
            {error === "error" && <Alert severity="error" variant='filled' sx={{marginBottom:'15px'}}>Error generando reclamo!</Alert>}
            {error === "pass" && <Alert severity="success" variant='filled'sx={{marginBottom:'10px'}}>Reclamo <strong>{codReclamo}</strong> generado con exito!</Alert>}
        </>
    );
};

export default CrearReclamo;
