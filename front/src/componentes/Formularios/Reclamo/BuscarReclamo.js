import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Alert, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { getReclamoByIdService, getReclamosByDniService, getReclamosByUser } from '../../../services/servicioReclamo';
import ModificarReclamo from './ModificarReclamo';
import { CardNoSelect } from '../../CardNoSelect';

const BuscarReclamo = ({user}) => {
    const [idReclamo, setIdReclamo] = useState("");
    const [error,setError] = useState("");
    const [reclamo,setReclamo]= useState(null);
    const [optionValue,setOptionValue] =useState("");
    const [reclamos,setReclamos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleAceptarAdmin= () => {
        getReclamoByIdService(idReclamo,setError,setReclamo)
    };

    const handleChange = (event) =>{
        setReclamo(event.target.value)
        setOptionValue(event.target.value)
    }

    useEffect(()=>{
        getReclamosByUser(user.documento,setReclamos,setError,setIsLoading)
    },[])


    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px',
        margin: '0 auto',
    };

    const textInputStyle = {
        width: '100%',
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
    };

    return (
        <>
          {user.isAdmin ? (
            <>
              {reclamo == null ? (
                <div style={formStyle}>
                  <TextField
                    label="ID RECLAMO"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={idReclamo}
                    onChange={(e) => setIdReclamo(e.target.value)}
                    sx={textInputStyle}
                  />
                  <Button
                    variant="contained"
                    style={buttonStyle}
                    color="primary"
                    onClick={handleAceptarAdmin}
                  >
                    Aceptar
                  </Button>
                  {error === "error" && (
                    <Alert severity="error" variant="filled" sx={{ marginTop: '350px' }}>
                      Reclamo inexistente - <strong>Verificar ID</strong>
                    </Alert>
                  )}
                </div>
              ) : (
                <ModificarReclamo reclamo={reclamo} user={user}></ModificarReclamo>
              )}
              <div>
                {/* Tu contenido específico para administradores va aquí */}
              </div>
            </>
          ) : (
            <>
                {isLoading ? (
                <CardNoSelect></CardNoSelect>
                ) : (
                <>
                    {reclamos.length >0 ? (
                        <>
                            {reclamo == null ? (
                            <FormControl>
                                <InputLabel id="selec-reclamo" color="primary">
                                ID Reclamo
                                </InputLabel>
                                <Select
                                label="Id Reclamo"
                                labelId="select-reclamo"
                                value={optionValue}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'With-label', style: { color: '#ffff' } }}
                                sx={{ width: '200px', flex: 1, background: '#fbf9eaa5', backdropFilter: 'blur(20px)' }}
                                >
                                {reclamos.map((option, index) => (
                                    <MenuItem value={option} key={index}>
                                    {option.numero}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            ) : (
                            <ModificarReclamo reclamo={optionValue} user={user}></ModificarReclamo>
                            )}
                        </>
                        ) : (
                            <Alert severity='error' variant='filled' sx={{mt:'220px'}}>No hay reclamos para modificar!</Alert>
                        )}
                </>
                )}
            </>
          )}
        </>
      );
      
      
      
};

export default BuscarReclamo;