import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { buttonStyleReclamo, containerStyleVerReclamo, formStyleReclamo } from "../../../../constants/cssConst";
import { getReclamosPorInquilino } from "../../../../services/servicioReclamo";
import { VerReclamoData } from "../../../VerReclamoData";
import { CardNoSelect } from "../../../CardNoSelect";

export const MostrarDataUser = ({user}) => {
    const [error,setError] = useState("");
    const [reclamos, setReclamos] = useState([ ]);
    const [isLoading,setIsLoading] = useState(true)
    const  dni = user.documento;


        useEffect(()=>{
            getReclamosPorInquilino(dni,setReclamos,setError,setIsLoading);
        },[])
   


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
            {isLoading==true ? (
                <>
                    <CardNoSelect></CardNoSelect>
                {error === "error" && <Alert severity="error" variant='filled'sx={{marginBottom:'10px', marginTop:'85px'}}>Unidad inexistente</Alert>}
                </>
            ) : (
                <VerReclamoData reclamos={reclamos}></VerReclamoData>
            )}
        </>
    );
    

}