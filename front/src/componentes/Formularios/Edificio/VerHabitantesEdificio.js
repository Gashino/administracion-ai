
import {getHabitadosEdificioService } from '../../../services/servicioEdificio';
import { useEffect, useState } from 'react';
import VerPersona from '../../VerPersona';

const VerHabitantesEdificio = ({edificio}) => {
    const [isLoading,setIsLoading] =useState(true)
    const [duenios,setHabilitados] = useState({})

    useEffect(() => {
        getHabitadosEdificioService(edificio.codigo,setIsLoading, setHabilitados)
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
    
}
export default VerHabitantesEdificio;