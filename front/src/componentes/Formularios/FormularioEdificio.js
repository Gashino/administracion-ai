import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router';
import VerHabilitadosEdificio from './Edificio/VerHabilitadosEdificio';
import VerHabitantesEdificio from './Edificio/VerHabitantesEdificio';
import VerUnidadesEdificio from './Edificio/VerUnidadesEdificio';
import VerDueniosEdificio from './Edificio/VerDueniosEdificio'
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { getEdificiosService } from '../../services/servicioEdificio';
import { buttonBackStyle, buttonStyleEdificio, formStyleEdificio, titleStyleEdificio } from '../../constants/cssConst';
import { CardNoSelect } from '../CardNoSelect';
import AgregarEdificio from './Edificio/AgregarEdificio';
import EliminarEdificio from './Edificio/EliminarEdificio';
import AgregarUnidad from './Edificio/AgregarUnidad';
import EliminarUnidad from './Edificio/EliminarUnidad';

const edificioOpcion = ['verDueniosEdificio', 'verHabilitadosEdificio', 'verHabitantesEdificio', 'verUnidadesEdificio',
 "agregarEdificio", "eliminarEdificio", "agregarUnidad", "eliminarUnidad"]

const FormularioEdificio = ({changeValue}) => {
    const [edificios, setEdificios] = useState({})
    const [optionValue, setOptionValue] = useState("");
    const [edificio, setEdificio] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getEdificiosService(setIsLoading, setEdificios)
    }, [])

    const handleChange = (event) => {
        setOptionValue(event.target.value)
        setEdificio(event.target.value)
    }

    const getHrefForOption = (option) => {
        switch (option) {
            case 'verDueniosEdificio':
                return '/edificio/ver-duenios-edificio';
            case 'verHabilitadosEdificio':
                return '/edificio/ver-habilitados-edificio';
            case 'verHabitantesEdificio':
                return '/edificio/ver-habitantes-edificio';
            case 'verUnidadesEdificio':
                return '/edificio/ver-unidades-edificio';
            case 'agregarEdificio':
                return '/edificio/ver-agregar-edificio';
            case 'eliminarEdificio':
                return '/edificio/ver-eliminar-edificio';
            case 'agregarUnidad':
                return '/edificio/ver-agregar-edificio-unidad';
            case 'eliminarUnidad':
                return '/edificio/ver-eliminar-edificio-unidad';
            case 'home':
                changeValue("")
                return '/home'
            default:
                return '/edificio';
        }
    };
    const handleRedirect = () => {
        if (location.pathname === '/edificio') {
            handleNavigation(getHrefForOption('home'));
        } else {
            handleNavigation(getHrefForOption('edificio'));
        }
    };
    const location = useLocation();
    const navigate = useNavigate();

    const componentMap = (path) => {
        const pathMap = {
            '/edificio/ver-duenios-edificio': 'Ver Dueños',
            '/edificio/ver-habilitados-edificio': 'Ver Habilitados',
            '/edificio/ver-habitantes-edificio': 'Ver Habitantes',
            '/edificio/ver-unidades-edificio': 'Ver Unidades',
            '/edificio/ver-agregar-edificio': 'Agregar Edificio',
            '/edificio/ver-eliminar-edificio': 'Eliminar Edificio',
            '/edificio/ver-agregar-edificio-unidad': 'Agregar Unidad',
            '/edificio/ver-eliminar-edificio-unidad': 'Eliminar Unidad',
        };

        return pathMap[path] || 'Edificio';
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            {!isLoading ? (
                <div style={formStyleEdificio}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            position: 'sticky',
                            top: 0,
                            backdropFilter: "blur(20px)",
                            background: "#fbf9eaa5",
                        }}
                    >
                        <Button
                            variant="contained"
                            style={buttonBackStyle}
                            color="primary"
                            onClick={handleRedirect}
                        >
                            <ArrowBackIcon />
                        </Button>
                        <h2 style={titleStyleEdificio}>
                            {componentMap(location.pathname)}
                        </h2>
                        <FormControl>
                            <InputLabel id="selec-edificio" color='primary'>Edificio</InputLabel>
                            <Select
                                label="Edificio"
                                labelId="select-edificio"
                                value={optionValue}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'With-label', style: { color: '#ffff' } }}
                                sx={{ width: '200px', flex: 1, background: '#fbf9eaa5', backdropFilter: "blur(20px)", }}
                            >
                                {edificios.map((option, index) => (
                                    <MenuItem value={option} key={index}>{option.nombre}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    {location.pathname === '/edificio/ver-duenios-edificio' && <VerDueniosEdificio edificio={edificio} />}
                    {location.pathname === '/edificio/ver-habilitados-edificio' && <VerHabilitadosEdificio edificio={edificio} />}
                    {location.pathname === '/edificio/ver-habitantes-edificio' && <VerHabitantesEdificio edificio={edificio} />}
                    {location.pathname === '/edificio/ver-unidades-edificio' && <VerUnidadesEdificio edificio={edificio} />}
                    {location.pathname === '/edificio/ver-agregar-edificio' && <AgregarEdificio edificio={edificio} />}
                    {location.pathname === '/edificio/ver-eliminar-edificio' && <EliminarEdificio edificio={edificio} />}
                    {location.pathname === '/edificio/ver-agregar-edificio-unidad' && <AgregarUnidad edificio={edificio} />}
                    {location.pathname === '/edificio/ver-eliminar-edificio-unidad' && <EliminarUnidad edificio={edificio} />}
                    {location.pathname === '/edificio' && (
                        <>
                            {
                                ["Ver dueños", "Ver Habilitados", "Ver habitantes", "Ver unidades", "Agregar Edificio", "Eliminar Edificio", "Agregar Unidad", "Eliminar Unidad"].map((option, index) => (
                                    <Button
                                        variant="contained"
                                        style={buttonStyleEdificio}
                                        color="primary"
                                        onClick={() => handleNavigation(getHrefForOption(edificioOpcion[index]))}
                                        key={index}
                                    >
                                        {option}
                                    </Button>
                                ))
                            }
                        </>
                    )}
                </div>
            ) : (<>
                <CardNoSelect />
                <Typography variant='h6' style={{ fontWeight: 'bold' }} sx={{ mt: '20px' }}>Cargando...</Typography>
            </>)}
        </>
    );
};


export default FormularioEdificio;
