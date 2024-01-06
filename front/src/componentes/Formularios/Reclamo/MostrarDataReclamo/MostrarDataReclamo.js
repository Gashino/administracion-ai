import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { buttonStyleReclamo, containerStyleVerReclamo, formStyleReclamo } from "../../../../constants/cssConst";
import { getReclamosByCodigoService } from "../../../../services/servicioReclamo";

export const MostrarDataReclamoCodigo = () => {
    const [codigo, setCodigo] = useState("");
    const [error,setError] = useState("");
    const [reclamo, setReclamos] = useState(null);

    const handleAceptar = () => {
        getReclamosByCodigoService(codigo,setError,setReclamos);
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
        {reclamo==null ? (
            <>
                <Typography variant='h6' style={{fontWeight:'bold'}} sx={{mt:'10px'}}>Ingresar código de un reclamo existente.</Typography>
                <div style={formStyleReclamo}>
                    <TextField
                        label="CODIGO DE RECLAMO"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={codigo}
                        sx={textInputStyle}
                        onChange={(e) => {setCodigo(e.target.value)}}
                    />
                    <Button variant="contained" style={buttonStyleReclamoVerCodigo} color="primary" onClick={handleAceptar}>
                        Aceptar
                    </Button>
                    {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px', marginTop:'290px'}}>Reclamo inexistente</Alert>}
                </div>
            </>
        ) : (
            <Container sx={{border:'1px solid black', width:'500px',borderRadius:'10px',padding:'10px'}}>
                <Container style={containerStyleVerReclamo}>
                    <Typography sx={{ fontWeight: 'bold' }}>ID Reclamo: </Typography>
                    <Typography color={'blue'}>{reclamo.numero}</Typography>
                </Container>
                    <Container style={containerStyleVerReclamo}>
                    <Typography sx={{ fontWeight: 'bold' }} >DNI Persona: </Typography>
                    <Typography>{reclamo.usuario.documento}</Typography>
                </Container>
                <Container style={containerStyleVerReclamo}>
                        <Typography sx={{ fontWeight: 'bold' }}>Codigo Edificio: </Typography>
                        <Typography>{reclamo.edificio.codigo}</Typography>
                </Container>
                <Container style={containerStyleVerReclamo}>
                        <Typography sx={{ fontWeight: 'bold' }}>Direccion: </Typography>
                        <Typography>{reclamo.edificio.direccion}</Typography>
                </Container>
                <Container style={containerStyleVerReclamo}>
                        <Typography sx={{ fontWeight: 'bold' }}>Piso:  </Typography>
                        <Typography>{reclamo.unidad.piso}</Typography>
                </Container>
                <Container style={containerStyleVerReclamo}>
                        <Typography sx={{ fontWeight: 'bold' }}>Departamento: </Typography>
                        <Typography>{reclamo.unidad.numero}</Typography>
                </Container>
                <Container style={containerStyleVerReclamo}>
                        <Typography sx={{ fontWeight: 'bold' }}>Ubicacion: </Typography>
                        <Typography>{reclamo.ubicacion}</Typography>
                </Container>

                <Container style={containerStyleVerReclamo}>
                        <Typography sx={{ fontWeight: 'bold' }}>Descripcion: </Typography>
                        <Typography>{reclamo.descripcion}</Typography>
                </Container>
                <Container style={containerStyleVerReclamo}>
                        <Typography sx={{ fontWeight: 'bold' }}>Estado:  </Typography>
                        <Typography color={'red'}>{reclamo.estado.toUpperCase()}</Typography>
                </Container>
            </Container>
        )}
    </>
);

}