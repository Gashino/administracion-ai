import { Alert, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { formStyleReclamo } from "../../../../constants/cssConst";
import { VerReclamoData } from "../../../VerReclamoData";
import { getReclamosByEdificioService } from "../../../../services/servicioReclamo";

export const MostrarDataEdificio = () => {
    const [error,setError] = useState("");
    const [reclamos, setReclamos] = useState(null);
    const [codEdificio,setCodEdificio] = useState("");

    const handleAceptar = () => {
        getReclamosByEdificioService(codEdificio,setReclamos,setError);
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
                <Typography variant='h6' style={{fontWeight:'bold'}} sx={{mt:'10px'}}>Ingresar Codigo De Edificio (1 al 9)</Typography>
                <div style={formStyleReclamo}>
                    <TextField
                        label="CODIGO EDIFICIO"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={codEdificio}
                        sx={textInputStyle}
                        onChange={(e) => {setCodEdificio(e.target.value)}}
                    />
                    <Button variant="contained" style={buttonStyleReclamoVerCodigo} color="primary" onClick={handleAceptar}>
                        Aceptar
                    </Button>
                    {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px', marginTop:'290px'}}>Edificio inexistente</Alert>}
                </div>
            </>
        ) : (
           <VerReclamoData reclamos={reclamos}></VerReclamoData>
        )}
    </>
);

}