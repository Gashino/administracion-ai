import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router';
import { Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { buttonBackStyle, buttonStyleEdificio, formStyleEdificio, titleStyleEdificio, titleStylePersona } from '../../constants/cssConst';
import { CardNoSelect } from '../CardNoSelect';
import VerDueniosEdificio from './Edificio/VerDueniosEdificio';
import VerInquilinoUnidad from './Unidad/VerInquilinosUnidad';
import TransferirUnidad from './Unidad/TransferirUnidad';
import AlquilarUnidad from './Unidad/AlquilarUnidad';
import AgregarInquilinoUnidad from './Unidad/AgregarInquilinoUnidad';
import LiberarUnidad from './Unidad/LiberarUnidad';
import HabilitarUnidad from './Unidad/HabilitarUnidad';
import { VerDueniosUnidad } from './Unidad/VerDuenioUnidad';
import { AgregarDuenioUnidad } from './Unidad/AgregarDuenioUnidad';

const unidadOption = ["Ver dueños", "Ver inquilinos", "Transferir Unidad", "Agregar Dueño", "Alquilar", "Agregar Inquilino", "Liberar", "Habitar"]

const FormularioUnidad = ({changeValue}) => {
    const [unidad, setUnidad] = useState('')
    const [piso, setPiso] = useState('')
    const [edificio, setEdificio] = useState('')
    const [aceptarButton, setAceptarButton] = useState(false)
    const [optionValue, setOptionValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const textInputStyle = {
        width: '30%',
        marginBottom: '1.5rem',
        marginTop: '1.5rem',
    };
    const buttonStyle = {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#272829',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#F3EEEA',
        },
        marginTop: '20px'
    };

    useEffect(() => {
        handleNavigation(getHrefForOption(optionValue))
    }, [optionValue])

    const handleAceptar = () => {
        setAceptarButton(true)
        handleNavigation(getHrefForOption('AccionesUnidad'))
        setOptionValue("")
    };

    const handleRedirect = () => {
        if (location.pathname === '/unidad') {
            handleNavigation(getHrefForOption('home'));
        } else {
            handleNavigation(getHrefForOption('unidad'));
        }
    };

    const getHrefForOption = (option) => {
        switch (option) {
            case 'Ver dueños':
                return '/unidad/ver-duenos';
            case 'Ver inquilinos':
                return '/unidad/ver-inquilinos';
            case 'Transferir Unidad':
                return '/unidad/transferir-unidad';
            case 'Agregar Dueño':
                return '/unidad/agregar-dueno';
            case 'Alquilar':
                return '/unidad/alquilar';
            case 'Agregar Inquilino':
                return '/unidad/agregar-inquilino';
            case 'Liberar':
                return '/unidad/liberar';
            case 'Habitar':
                return '/unidad/habitar';
            case 'AccionesUnidad':
                return '/unidad/acciones'
            case 'home':
                changeValue("");
                return '/home'
            default:
                return '/unidad';
        }
    };
    const location = useLocation();
    const navigate = useNavigate();

    const componentMap = (path) => {
        const pathMap = {
            '/unidad/ver-duenos': 'Ver Dueños',
            '/unidad/ver-inquilinos': 'Ver Inquilinos',
            '/unidad/transferir-unidad': 'Transferir Unidad',
            '/unidad/agregar-dueno': 'Agregar Dueño',
            '/unidad/alquilar': 'Alquilar',
            '/unidad/agregar-inquilino': 'Agregar Inquilino',
            '/unidad/liberar': 'Liberar',
            '/unidad/habitar': 'Habitar',
        };

        return pathMap[path] || 'Unidad';
    };
    const handleNavigation = (path) => {
        navigate(path);
        if (location.pathname === "/unidad") { setAceptarButton(false) }
    };

    return (
        <>

            {isLoading ? (
                <div style={formStyleEdificio}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'sticky', top: 0, backdropFilter: "blur(20px)",
                        background: "#fbf9eaa5",
                    }}>
                        <Button variant="contained" style={buttonBackStyle} color="primary" onClick={handleRedirect}>
                            <ArrowBackIcon />
                        </Button>
                        <h2 style={titleStylePersona}>
                            {componentMap(location.pathname)}
                        </h2>
                    </div>

                    {location.pathname === '/unidad/ver-duenos' && <VerDueniosUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad/ver-inquilinos' && <VerInquilinoUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad/transferir-unidad' && <TransferirUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad/agregar-dueno' && <AgregarDuenioUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad/alquilar' && <AlquilarUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad/agregar-inquilino' && <AgregarInquilinoUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad/liberar' && <LiberarUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad/habitar' && <HabilitarUnidad edificio={edificio} piso={piso} unidad={unidad} />}
                    {location.pathname === '/unidad' && !aceptarButton && (
                        <>
                            <Typography variant='h6'>Ingresar los datos de la unidad.</Typography>
                            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '30px' }}>
                                <TextField label="Edificio" variant="outlined" fullWidth margin="normal" value={edificio} onChange={(e) => setEdificio(e.target.value)} sx={textInputStyle} />
                                <TextField label="Piso" variant="outlined" fullWidth margin="normal" value={piso} onChange={(e) => setPiso(e.target.value)} sx={textInputStyle} />
                                <TextField label="Unidad" variant="outlined" fullWidth margin="normal" value={unidad} onChange={(e) => setUnidad(e.target.value)} sx={textInputStyle} />
                            </Container>
                            <Button variant="contained" style={buttonStyle} color="primary" onClick={handleAceptar}>
                                Aceptar
                            </Button>
                        </>
                    )}

                    {location.pathname === '/unidad/acciones' && (
                        <FormControl sx={{}}>
                            <InputLabel id="selec-edificio" color='primary'>¿Qué desea hacer? 🔎</InputLabel>
                            <Select
                                label="¿Qué desea buscar? 🔎 "
                                labelId="select-edificio"
                                value={optionValue}
                                onChange={(e) => { setOptionValue(e.target.value) }}
                                inputProps={{ 'aria-label': 'With-label', style: { color: '#ffff' } }}
                                sx={{ width: '220px', flex: 1 }}
                            >
                                {unidadOption.map((option, index) => (
                                    <MenuItem value={option} key={index}>{option}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </div>
            ) : (
                <>
                    <CardNoSelect />
                    <Typography variant='h6' style={{ fontWeight: 'bold' }} sx={{ mt: '20px' }}>Cargando...</Typography>
                </>
            )}
        </>
    );
}

export default FormularioUnidad;