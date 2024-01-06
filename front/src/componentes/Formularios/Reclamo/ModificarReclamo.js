import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { buttonStyleReclamo, formStyleReclamo } from '../../../constants/cssConst';
import ModificarReclamoForm from './ModificarReclamoForm';
import { AgregarImagenReclamo } from './AgregarImangeReclamo';
import { CambiarEstadoReclamo } from './CambiarEstadoReclamo';


const ModificarReclamo = ({ reclamo , user}) => {
    const [opcion, setOpcion] = useState("")


    return (
        <>
          {opcion === "" ? (
            <div style={formStyleReclamo}>
              <Button
                variant="contained"
                style={buttonStyleReclamo}
                color="primary"
                onClick={ () => setOpcion("modificarDatos")}
              >
                Modificar datos
              </Button>
              <Button
                variant="contained"
                style={buttonStyleReclamo}
                color="primary"
                onClick={ () => setOpcion("agregarImg")}
              >
                Agregar Imagen
              </Button>
              {user.isAdmin &&(
              <Button
                variant="contained"
                style={buttonStyleReclamo}
                color="primary"
                onClick={ () => setOpcion("cambiarEstado")}
              >
                Cambiar Estado
              </Button>)}
            </div>
          ) : ( <>
                {opcion === "modificarDatos" && (<ModificarReclamoForm reclamo={reclamo}/>)}
                {opcion === "agregarImg" && ( <AgregarImagenReclamo reclamo={reclamo}/>)}
                {user.isAdmin && opcion === "cambiarEstado" && (<CambiarEstadoReclamo reclamo={reclamo}></CambiarEstadoReclamo>)}
                </>
          )}
        </>
      );
      
};

export default ModificarReclamo;
