import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import LoginModal from "./LogInModal";
import { useNavigate } from "react-router-dom";
import DropdownOptions from "./DropdownOptions";
import Homepage from "./HomePage";
import CardOptions from "./CardOptions";
import FormularioReclamo from "./Formularios/FormularioReclamo";
import FormularioPersona from "./Formularios/FormularioPersona";
import FormularioEdificio from "./Formularios/FormularioEdificio";
import FormularioUnidad from "./Formularios/FormularioUnidad";
import { cardContainerStyle } from "../constants/consts";

const HeaderWithDropdown = ({ onLogout, userActual }) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const iconBuilding = require("../recursos/building-1062 (1).png");

    const [optionValue, setOptionValue] = React.useState("");


    const handleChange = (event) => {
        setOptionValue(event.target.value)
        handleNavigation(getHrefForOption(event.target.value))
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

    const handleClick = () => {
        onLogout()
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <AppBar position="relative" sx={{
                backgroundColor: '#fbfbf3',
                boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
            }}>
                <Toolbar sx={{ mt: '5px', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Button onClick={() => handleNavigation('/home')}>
                            <img src={iconBuilding} alt="Logo" height="50" />
                        </Button>
                    </div>
                    <FormControl sx={{ width: 280 }}>
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
                    <Button onClick={handleClick} sx={{
                        color: '#2c2c2b',
                        backgroundColor: 'transparent',
                        '&:hover': { backgroundColor: 'transparent' },
                        fontSize: '1.2rem',
                        ml: '10px' // Ajusta el margen izquierdo según sea necesario
                    }}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            {optionValue === "" && <Homepage user={userActual} />}
            {optionValue !== "" &&
                <div style={cardContainerStyle}>
                    {optionValue === "reclamo" && <CardOptions> <FormularioReclamo user={userActual} changeValue={setOptionValue}></FormularioReclamo></CardOptions>}
                    {optionValue === "persona" && <CardOptions> <FormularioPersona user={userActual} changeValue={setOptionValue}></FormularioPersona></CardOptions>}
                    {optionValue === "edificio" && <CardOptions> <FormularioEdificio user={userActual} changeValue={setOptionValue}></FormularioEdificio></CardOptions>}
                    {optionValue === "unidad" && <CardOptions> <FormularioUnidad user={userActual} changeValue={setOptionValue}></FormularioUnidad></CardOptions>}
                </div>
            }
        </>
    );
};

export default HeaderWithDropdown;
