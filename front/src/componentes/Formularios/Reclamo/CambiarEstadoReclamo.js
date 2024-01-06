import { Alert, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { buttonStyleEdificio, formStyleReclamo } from "../../../constants/cssConst";
import { useState } from "react";
import { changeStateReclamoService } from "../../../services/servicioReclamo";

export const CambiarEstadoReclamo = ({reclamo}) => {
    const codReclamo = reclamo.numero
    const[nuevoEstado,setNuevoEstado] = useState(reclamo.estado);
    const [error,setError] = useState("")

    const handleAceptar = () => {
        changeStateReclamoService(codReclamo,nuevoEstado,setError)
    }

    return(
        <>
            <div style={formStyleReclamo}>
                <Box sx={{border:'1px solid', p:'10px', borderRadius:'10px', width:'260px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <Box sx={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                        <Typography fontWeight='bold' variant="h7">Reclamo:</Typography>
                        <Typography variant="h7"fontWeight='bold'>{reclamo.numero}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '3px', mt:'1px', justifyContent: 'center' }}> 
                        <Typography  variant="h6" fontWeight='bold'>Estado:</Typography>
                        <Typography variant="h6" fontWeight='bold' color={'red'}>{reclamo.estado.toUpperCase()}</Typography>
                    </Box>
                </Box>
                <FormControl sx={{mb:'1px', mt:'60px'}}>
                    <InputLabel id="selec-tipo" color='primary'>Nuevo-Estado</InputLabel>
                    <Select
                        label="Nuevo-Estado"
                        labelId="Nuevo-Estado"
                        onChange={(e)=>{setNuevoEstado(e.target.value)}}
                        inputProps={{ 'aria-label': 'With-label', style: { color: '#ffff' } }}
                        sx={{ width: '200px', flex: 1, }}
                    >
                        {["nuevo","abierto","enProceso","desestimado","anulado","terminado"].map((option, index) => (
                            <MenuItem value={option} key={index}>{option.toUpperCase()}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained" style={buttonStyleEdificio} color="primary" onClick={handleAceptar} sx={{marginTop:'150px'}}>
                    Aceptar
                </Button>
                {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px', marginTop   :'200px'}}>Error cambiando el estado</Alert>}
                {error === "pass" && <Alert severity="success" variant='filled'sx={{marginBottom:'10px', marginTop   :'200px'}}>Estado cambiado a <strong>{nuevoEstado.toUpperCase()}</strong></Alert>}
            </div>
        </>
    );
}