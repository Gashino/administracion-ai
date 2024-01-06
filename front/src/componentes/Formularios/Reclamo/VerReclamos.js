import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {formStyleReclamo } from '../../../constants/cssConst';
import { Box } from '@mui/material';
import { MostrarDataReclamo, MostrarDataReclamoCodigo } from './MostrarDataReclamo/MostrarDataReclamo';
import { MostrarDataPersona } from './MostrarDataReclamo/MostrarDataPersona';
import { MostrarDataUnidad } from './MostrarDataReclamo/MostrarDataUnidad';
import { MostrarDataEdificio } from './MostrarDataReclamo/MostrarDataEdificio';
import { MostrarDataUser } from './MostrarDataReclamo/MostrarDataUser';


export const VerReclamos = ({user}) => {
    const [opcion, setOpcion] = useState('');

    //NO SACAR NO SACAR NO SACAR NO SACAR NO SACAR (TE HABLO A VOS, PEDRO)!!!
    const buttonStyleReclamo = {
        width: "220px",
        marginTop: "60px",
        marginBottom:'20px',
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
            {opcion === '' ? (
                <Box style={formStyleReclamo} sx={{justifyContent:'center',alignItems:'center'}}>
                    {user.isAdmin ?(
                        <>
                            <Button
                            variant="contained"
                            style={buttonStyleReclamo}
                            color="primary"
                            onClick={() => setOpcion('verCodigo')}
                            >
                                VER POR CODIGO
                            </Button>
                            <Button
                                variant="contained"
                                style={buttonStyleReclamo}
                                color="primary"
                                onClick={() => setOpcion('verPersona')}
                            >
                                VER POR PERSONA
                            </Button>
                            <Button
                                variant="contained"
                                style={buttonStyleReclamo}
                                color="primary"
                                onClick={() => setOpcion('verUnidad')}
                            >
                                VER POR UNIDAD
                            </Button>
                            <Button
                                variant="contained"
                                style={buttonStyleReclamo}
                                color="primary"
                                onClick={() => setOpcion('verEdificio')}
                            >
                                VER POR EDIFICIO
                            </Button>
                        </>
                        ) : (<MostrarDataUser user={user}></MostrarDataUser>)}
                </Box>
            ) : (
                <>
                    {opcion === "verCodigo" && (<MostrarDataReclamoCodigo/>)}
                    {opcion === "verPersona" && ( <MostrarDataPersona/> )}
                    {opcion === "verUnidad" && (<MostrarDataUnidad/>)}
                    {opcion === "verEdificio" && (<MostrarDataEdificio/>)}
                </>
            )}
        </>
    );
};


