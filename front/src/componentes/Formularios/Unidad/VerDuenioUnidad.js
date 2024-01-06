
import { useEffect, useState } from 'react';
import VerPersona from '../../VerPersona';
import { CardNoSelect } from '../../CardNoSelect';
import { getDueniosUnidadService } from '../../../services/servicioUnidad';
import { Container, Typography } from '@mui/material';

export const VerDueniosUnidad = ({ edificio, piso, unidad }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [duenios, setDuenios] = useState([])
    const [error,setError] = useState("")

    useEffect(() => {
        getDueniosUnidadService(edificio,piso,unidad,setDuenios,setError,setIsLoading)
        setIsLoading(false)
    }, [])

    return (
        <>
            {!isLoading ? (
                <div>
                    {duenios.map((persona, index) => (
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
