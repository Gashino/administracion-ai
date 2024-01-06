
import { useEffect, useState } from 'react';
import VerPersona from '../../VerPersona';
import { Container, Typography } from '@mui/material';
import { CardNoSelect } from '../../CardNoSelect';
import { getInquilinosUnidadService } from '../../../services/servicioUnidad';

const VerInquilinoUnidad = ({ edificio, piso, unidad }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [inquilinos, setInquilinos] = useState([])
    const [error,setError] = useState("")

    useEffect(() => {
        getInquilinosUnidadService(edificio,piso,unidad,setInquilinos,setError)
        setIsLoading(false)
    }, [])


    return (
        <>
            {!isLoading ? (
                <div>
                    {inquilinos.map((persona, index) => (
                        <VerPersona key={index} personas={[persona]} />
                    ))}
                </div>
            ) : (
                <Container sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                    <Typography variant='h6' sx={{ marginBottom: "1px"}}>Cargando...</Typography>
                    <CardNoSelect></CardNoSelect>
                </Container>
            )}
        </>
    );

}
export default VerInquilinoUnidad;