import { useState } from "react";
import FormularioReclamo from "../componentes/Formularios/FormularioReclamo";
import FormularioPersona from "../componentes/Formularios/FormularioPersona";

const useApp = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [pathActual, setPathActual] = useState(window.location.pathname);


    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const setPath = (newPath) => {
        if (newPath !== pathActual) {
            setPathActual(newPath);
        }
    };

    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case 'reclamo':
                return <FormularioReclamo />;
            case 'persona':
                return <FormularioPersona />;
            default:
                return null;
        }
    };


    return {
        selectedOption,
        handleOptionChange,
        renderSelectedComponent,
        setPath,
    };
};

export default useApp;
