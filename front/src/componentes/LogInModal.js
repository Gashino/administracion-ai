import React, { useState } from 'react';
import { Alert, Button, Dialog, Grid, Input, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { fetchUserData } from '../services/servicioPersona';

const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  width: '400px',
  height: '350px',
}));

const SpacedInput = styled(Input)(({ theme }) => ({
  margin: theme.spacing(1.5),
  width: '270px',
}));




const LoginModal = ({ open, onClose, onLogin }) => {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [errorBool,setErrorBool] = useState(false)

  
  function handleSumbit() {
    onLogin(fetchUserData(mail, password,setError,setErrorBool,onClose))
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <LoginPaper>
        <h2>Login</h2>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <SpacedInput
              error={errorBool}
              type="text"
              placeholder="Mail"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <SpacedInput
              error={errorBool}
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => { handleSumbit() }} variant="outlined" color="inherit"
              sx={{
                color: '#2c2c2b',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                fontSize: '1.05rem',
                boxShadow: 'none',
                marginBottom:'10px'
              }}>
              Aceptar
            </Button>
            {error=="error" && <Alert severity="error" variant='outlined'><Typography style={{ fontWeight: 'bold' }}>Error al iniciar sesión!</Typography></Alert>}
            {error=="pass" && <Alert severity="success" variant='outlined'><Typography style={{ fontWeight: 'bold'}}>Inicio exitoso!</Typography></Alert>}
          </Grid>
        </Grid>
      </LoginPaper>
    </Dialog>
  );
};

export default LoginModal;
