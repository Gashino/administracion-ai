import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { buttonStyleReclamo, containerStyleVerReclamo, formStyleReclamo } from "../../../../constants/cssConst";
import { getReclamosByDniService, getReclamosByUnidadService } from "../../../../services/servicioReclamo";
import { VerReclamoData } from "../../../VerReclamoData";

export const MostrarDataUnidad = () => {
    const [edificio, setEdificio] = useState("");
    const [piso, setPiso] = useState("");
    const [unidad, setUnidad] = useState("");
    const [error,setError] = useState("");
    const [reclamos, setReclamos] = useState(null);

    const handleAceptar = () => {
        getReclamosByUnidadService(edificio,piso,unidad,setReclamos,setError);
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
            {reclamos === null ? (
                <>
                <Typography variant='h6' style={{ fontWeight: 'bold' }} sx={{ mt: '10px' }}>Ingresar datos de unidad</Typography>
                <TextField label="Edificio" variant="outlined" fullWidth margin="normal" value={edificio} onChange={(e) => setEdificio(e.target.value)} sx={textInputStyle} />
                <TextField label="Piso" variant="outlined" fullWidth margin="normal" value={piso} onChange={(e) => setPiso(e.target.value)} sx={textInputStyle} />
                <TextField label="Unidad" variant="outlined" fullWidth margin="normal" value={unidad} onChange={(e) => setUnidad(e.target.value)} sx={textInputStyle} />
                <Button variant="contained" style={buttonStyleReclamoVerCodigo} color="primary" onClick={handleAceptar}>
                    Aceptar
                </Button>
                {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px', marginTop:'85px'}}>Unidad inexistente</Alert>}
                </>
            ) : (
                <VerReclamoData reclamos={reclamos}></VerReclamoData>
            )}
        </>
    );
    

}