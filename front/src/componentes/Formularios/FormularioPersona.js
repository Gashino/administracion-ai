import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AgregarPersona from './Persona/AgregarPersona';
import ModificarPersona from './Persona/BuscarPersona';
import { useLocation, useNavigate } from 'react-router-dom';
import EliminarPersona from './Persona/EliminarPersona';
import { buttonBackStyle, buttonStylePersona, formStylePersona, titleStylePersona } from '../../constants/cssConst';
import BuscarPersona from './Persona/BuscarPersona';

const FormularioPersona = ({ user, changeValue}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleRedirect = () => {
        if (location.pathname === '/persona') {
            handleNavigation(getHrefForOption('home'));
        } else {
            handleNavigation(getHrefForOption('persona'));
        }
    };

    const getHrefForOption = (option) => {
        switch (option) {
            case 'modificarPersona':
                return '/persona/modificar-persona';
            case 'agregarPersona':
                return '/persona/agregar-persona';
            case 'eliminarPersona':
                return '/persona/eliminar-persona';
            case 'home':
                changeValue("")
                return '/home'
            default:
                return '/persona';
        }
    };
    const componentMap = (path) => {
        const pathMap = {
            '/persona/agregar-persona': 'Agregar Persona',
            '/persona/modificar-persona': 'Modificar Persona',
            '/persona/eliminar-persona': 'Eliminar Persona',
            '/persona': 'Persona',
        };

        return pathMap[path] || 'Persona';
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div style={formStylePersona}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: '20px',
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
                <h2 style={titleStylePersona}>
                    {componentMap(location.pathname)}
                </h2>
            </div>
            {location.pathname === '/persona/modificar-persona' && <BuscarPersona />}
            {location.pathname === '/persona/eliminar-persona' && <EliminarPersona />}
            {location.pathname === '/persona/agregar-persona' && <AgregarPersona />}
            {location.pathname === '/persona' && (
                <>
                    <Button
                        variant="contained"
                        style={buttonStylePersona}
                        color="primary"
                        onClick={() => handleNavigation(getHrefForOption('agregarPersona'))}
                    >
                        Agregar Persona
                    </Button>
                    <Button
                        variant="contained"
                        style={buttonStylePersona}
                        color="primary"
                        onClick={() => handleNavigation(getHrefForOption('modificarPersona'))}
                    >
                        Modificar Persona
                    </Button>
                    <Button
                        variant="contained"
                        style={buttonStylePersona}
                        color="primary"
                        onClick={() => handleNavigation(getHrefForOption('eliminarPersona'))}
                    >
                        Eliminar Persona
                    </Button>
                </>
            )}
        </div>
    );
};

export default FormularioPersona;