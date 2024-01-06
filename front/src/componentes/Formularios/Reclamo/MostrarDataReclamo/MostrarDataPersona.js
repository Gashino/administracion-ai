import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { containerStyleVerReclamo, formStyleReclamo } from "../../../../constants/cssConst";
import { getReclamosByCodigoService, getReclamosByDniService } from "../../../../services/servicioReclamo";
import { VerReclamoData } from "../../../VerReclamoData";

export const MostrarDataPersona = () => {
    const [dni, setDni] = useState("");
    const [error,setError] = useState("");
    const [reclamos, setReclamos] = useState(null);

    const handleAceptar = () => {
        getReclamosByDniService(dni,setReclamos,setError);
    }


    //NO ELIMINAR LOS STYLES
    const textInputStyle = {
        width: '70%',
        marginBottom: '1.5rem',
        marginTop:'30px'
    };

    
    const buttonStyleReclamoVerCodigo = {
        width: "150px",
        marginTop: "20Px",
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#272829',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#F3EEEA',
        },
    };


return (
    <>
        {reclamos===null ? (
            <>
                <Typography variant='h6' style={{fontWeight:'bold'}} sx={{mt:'10px'}}>Ingresar DNI de una persona con reclamos.</Typography>
                <div style={formStyleReclamo}>
                    <TextField
                        label="DNI PERSONA"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={dni}
                        sx={textInputStyle}
                        onChange={(e) => {setDni(e.target.value)}}
                    />
                    <Button variant="contained" style={buttonStyleReclamoVerCodigo} color="primary" onClick={handleAceptar}>
                        Aceptar
                    </Button>
                    {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px', marginTop:'290px'}}>Persona inexistente</Alert>}
                </div>
            </>
        ) : (
           <VerReclamoData reclamos={reclamos}></VerReclamoData>
        )}
    </>
);

}