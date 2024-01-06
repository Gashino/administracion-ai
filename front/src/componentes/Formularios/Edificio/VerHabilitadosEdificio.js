
import {getHabilitadosEdificioService } from '../../../services/servicioEdificio';
import { useEffect, useState } from 'react';
import VerPersona from '../../VerPersona';

const VerHabilitadosEdificio = ({edificio}) => {
    const [isLoading,setIsLoading] =useState(true)
    const [habilitados,setHabilitados] = useState({})

    useEffect(() => {
        getHabilitadosEdificioService(edificio.codigo,setIsLoading, setHabilitados)
    }, [edificio])


    return (
        <>
            {!isLoading ? (
                <div>
                    {habilitados.map((persona, index) => (
                        <VerPersona key={index} personas={[persona]} />
                    ))}
                </div>
            ) : (
                <h2>cargando...</h2>
            )}
        </>
    );
    
}
export default VerHabilitadosEdificio;