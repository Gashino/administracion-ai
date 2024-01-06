import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Alert, TextField} from '@mui/material';
import { formStyleEdificio } from '../../../constants/cssConst';
import { eliminarUnidadService } from '../../../services/servicioUnidad';



const EliminarUnidad = ({changeValue,edificio}) => {
    const [unidad, setUnidad] = useState('')
    const [piso, setPiso] = useState('')
    const [error, setError] = useState('')



    const textInputStyle = {
        width: '30%',
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
        marginTop: '20px'
    };

    const handleAceptar = () => {
        eliminarUnidadService(edificio.codigo,piso,unidad,setError)
    };




    return (
        <div style={formStyleEdificio}>
            <TextField label="Piso" variant="outlined" fullWidth margin="normal" value={piso} onChange={(e) => setPiso(e.target.value)} sx={textInputStyle} />
            <TextField label="Unidad" variant="outlined" fullWidth margin="normal" value={unidad} onChange={(e) => setUnidad(e.target.value)} sx={textInputStyle} />
            <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                Aceptar
            </Button>
            {error === "error" && <Alert severity="error" variant='filled'sx={{mt:'240px'}}>Error al eliminar unidad</Alert>}
            {error === "pass" && <Alert severity="success" variant='filled'sx={{mt:'240px'}}>unidad agregado!</Alert>}
        </div>
    );
};

export default EliminarUnidad;
