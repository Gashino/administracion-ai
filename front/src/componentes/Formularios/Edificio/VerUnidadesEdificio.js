import React, { useEffect, useState } from 'react';
import { getUnidadesEdificioService } from '../../../services/servicioEdificio';
import VerUnidad from '../../VerUnidad';



const VerUnidadesEdificio = ({ edificio }) => {
    const [isLoading,setIsLoading] =useState(true)
    const [unidades,setUnidades] = useState({})

    useEffect(() => {
        getUnidadesEdificioService(edificio.codigo,setIsLoading, setUnidades)
    }, [edificio])
    
    return (
        <>
            {!isLoading ? (
                <div>
                    {unidades.map((unidad, index) => (
                        <VerUnidad key={index} unidades={[unidad]} />
                    ))}
                </div>
            ) : (
                <h2>cargando...</h2>
            )}
        </>
    );
};

export default VerUnidadesEdificio;
