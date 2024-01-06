import { Alert, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { formStyleReclamo } from "../../../constants/cssConst";
import { useState } from "react";
import { addImageReclamoService } from "../../../services/servicioReclamo";

export const AgregarImagenReclamo = ({reclamo}) => {
    const [imagen,setImagen] = useState("");
    const [tipo,setTipo] = useState("");
    const [error,setError] = useState("");
    const codReclamo=reclamo.numero;

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

    const handleAceptar = () => {
        addImageReclamoService(codReclamo,imagen,tipo,setError);
    }

    return(
        <>
            <Typography variant='h6' style={{fontWeight:'bold'}}>Número: {reclamo.numero}</Typography>
            <div style={formStyleReclamo}>
                <TextField
                    label="URL-Imagen"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={imagen}
                    sx={textInputStyle}
                    onChange={(e)=>{setImagen(e.target.value)}}
                />
                <FormControl sx={{mb:'1px', mt:'10px'}}>
                    <InputLabel id="selec-tipo" color='primary'>Tipo-Imagen</InputLabel>
                    <Select
                        label="Tipo-Imagen"
                        labelId="select-tipo"
                        onChange={(e)=>{setTipo(e.target.value)}}
                        inputProps={{ 'aria-label': 'With-label', style: { color: '#ffff' } }}
                        sx={{ width: '200px', flex: 1, }}
                    >
                        {["JPG","JPGE","PNG","WEBP"].map((option, index) => (
                            <MenuItem value={option} key={index}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                    Aceptar
                </Button>
                {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px', marginTop   :'200px'}}>Error al agregar imagen a reclamo</Alert>}
                {error === "pass" && <Alert severity="success" variant='filled'sx={{marginBottom:'10px', marginTop   :'200px'}}>Imagen agregada a reclamo <strong>{codReclamo}</strong></Alert>}
            </div>
        
        </>
    );
}