import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const VerUnidad = ({ unidades }) => {
    return (
        <div>
            {unidades.map((unidad, index) => (
                <Container key={index} sx={{ mt: '12px', border: '1px solid #ddd', padding: '12px', borderRadius: '8px' ,alignContent:'left'}}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        ID UNIDAD:  {unidad.id}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={1}>
                        <Typography fontWeight="bold" mr={1}>
                            Piso:
                        </Typography>
                        <Typography>{unidad.piso}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography fontWeight="bold" mr={1}>
                            Número:
                        </Typography>
                        <Typography>{unidad.piso}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography fontWeight="bold" mr={1}>
                            Habitado:
                        </Typography>
                        <Typography>{unidad.habitado ? ("SI") : ("NO")}</Typography>
                    </Box>
                </Container>
            ))}
        </div>
    );
};

export default VerUnidad;
