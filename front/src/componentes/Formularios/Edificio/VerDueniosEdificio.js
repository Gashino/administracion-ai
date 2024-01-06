
import Button from '@mui/material/Button';
import { getDueniosEdificioService } from '../../../services/servicioEdificio';
import { useEffect, useState } from 'react';
import VerPersona from '../../VerPersona';


const VerDueniosEdificio = ({edificio}) => {
    const [isLoading,setIsLoading] =useState(true)
    const [duenios,setDuenios] = useState({})

    useEffect(() => {
        getDueniosEdificioService(edificio.codigo,setIsLoading, setDuenios)
    }, [edificio])

    return (
        <>
            {!isLoading ? (
                <div>
                    {duenios.map((persona, index) => (
                        <VerPersona key={index} personas={[persona]} />
                    ))}
                </div>
            ) : (
                <h2>cargando...</h2>
            )}
        </>
    );
};

export default VerDueniosEdificio;