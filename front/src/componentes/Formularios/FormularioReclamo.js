import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ModificarReclamo from './Reclamo/ModificarReclamo';
import CrearReclamo from './Reclamo/CrearReclamo';
import { useLocation, useNavigate } from 'react-router';
import { buttonBackStyle, buttonStyleReclamo, formStyleReclamo, titleStyle } from '../../constants/cssConst';
import BuscarReclamo from './Reclamo/BuscarReclamo';
import { VerReclamos } from './Reclamo/VerReclamos';

const FormularioReclamo = ({ user ,changeValue}) => {

    const getHrefForOption = (option) => {
        switch (option) {
            case 'crearReclamo':
                return '/reclamo/crear-reclamo';
            case 'modificarReclamo':
                return '/reclamo/modificar-reclamo';
            case 'verReclamo':
                return '/reclamo/ver-reclamo';
            case 'home':
                changeValue("")
                return '/home'
            default:
                return '/reclamo';
        }
    };

    const handleRedirect = () => {
        if (location.pathname === '/reclamo') {
            handleNavigation(getHrefForOption('home'));
        } else {
            handleNavigation(getHrefForOption('reclamo'));
        }
    };

    const location = useLocation();
    const navigate = useNavigate();

    const componentMap = (path) => {
        const pathMap = {
            'verReclamo': 'Ver Reclamo',
            'modificarReclamo': 'Modificar Reclamo',
            'crearReclamo': 'Crear Reclamo',
            'default': 'Reclamo',
        };

        return pathMap[path] || 'Reclamo';
    };
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div style={formStyleReclamo}>
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
                <h2 style={titleStyle}>
                    {componentMap(location.pathname)}
                </h2>
            </div>
            {location.pathname === '/reclamo/crear-reclamo' && <CrearReclamo  user={user} />}
            {location.pathname === '/reclamo/modificar-reclamo' && <BuscarReclamo user={user} />}
            {location.pathname === '/reclamo/ver-reclamo' && <VerReclamos user={user}/>}
            {location.pathname === '/reclamo' && (
                <>
                    <Button
                        variant="contained"
                        style={buttonStyleReclamo}
                        color="primary"
                        onClick={() => handleNavigation(getHrefForOption('crearReclamo'))}
                    >
                        Crear Reclamo
                    </Button>
                    <Button
                        variant="contained"
                        style={buttonStyleReclamo}
                        color="primary"
                        onClick={() => handleNavigation(getHrefForOption('modificarReclamo'))}
                    >
                        Modificar Reclamo
                    </Button>
                    <Button
                        variant="contained"
                        style={buttonStyleReclamo}
                        color="primary"
                        onClick={() => handleNavigation(getHrefForOption('verReclamo'))}
                    >
                        Ver Reclamos
                    </Button>
                </>
            )}
        </div>
    );
};


export default FormularioReclamo;
