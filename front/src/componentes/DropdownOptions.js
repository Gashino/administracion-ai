import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel, Typography } from '@mui/material';
import { cardContainerStyle } from '../constants/consts';
import CardOptions from './CardOptions';
import FormularioReclamo from './Formularios/FormularioReclamo';
import FormularioPersona from './Formularios/FormularioPersona';
import FormularioEdificio from './Formularios/FormularioEdificio';
import FormularioUnidad from './Formularios/FormularioUnidad';
import { useLocation, useNavigate } from 'react-router';
import Homepage from './HomePage';

const DropdownOptions = ({ userActual }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [optionValue, setOptionValue] = React.useState("");


    const handleChange = (event) => {
        setOptionValue(event.target.value)
        handleNavigation(getHrefForOption(event.target.value))
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const getHrefForOption = (option) => {
        switch (option) {
            case 'persona':
                return '/persona';
            case 'reclamo':
                return '/reclamo';
            case 'edificio':
                return '/edificio';
            case 'unidad':
                return '/unidad';
            default:
                return '/home';
        }
    };

    return (
        <div>
            <FormControl sx={{ width: 250, mt:"30px" }}>
                <InputLabel id="select-label" color='primary'>¿Qué desea hacer? 🔎⚙️</InputLabel>
                <Select
                    label="SELECCIONAR OPCION"
                    labelId="select-label"
                    value={optionValue}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'With-label', style: { color: '#ffff' } }}
                >
                    {userActual.isAdmin ? (
                        ["Persona", "Reclamo", "Edificio", "Unidad"].map((option, index) => (
                            <MenuItem value={option.toLowerCase()} key={index}>{option}</MenuItem>
                        )))
                        :
                        <MenuItem value={"reclamo"}>Reclamo</MenuItem>
                    }
                </Select>
            </FormControl>
            {optionValue === "" && <Homepage  user={userActual}/>}
            {optionValue !== "" &&
                <div style={cardContainerStyle}>
                    {optionValue === "reclamo" && <CardOptions> <FormularioReclamo user={userActual} changeValue={setOptionValue}></FormularioReclamo></CardOptions>}
                    {optionValue === "persona" && <CardOptions> <FormularioPersona user={userActual}changeValue={setOptionValue}></FormularioPersona></CardOptions>}
                    {optionValue === "edificio" && <CardOptions> <FormularioEdificio user={userActual}changeValue={setOptionValue}></FormularioEdificio></CardOptions>}
                    {optionValue === "unidad" && <CardOptions> <FormularioUnidad user={userActual} changeValue={setOptionValue}></FormularioUnidad></CardOptions>}
                </div>
            }
        </div>
    );
};

export default DropdownOptions;
