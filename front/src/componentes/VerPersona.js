import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const VerPersona = ({ personas }) => {
    return (
        <div>
            {personas.map((persona, index) => (
                <Container key={index} sx={{ mt: '7px', border: '1px solid #ddd', padding: '12px', borderRadius: '8px' }}>
                    <Typography variant='h6' fontWeight='bold' mb={2}>
                        {persona.nombre}
                    </Typography>
                    <Box display='flex' alignItems='center' mb={1}>
                        <Typography fontWeight='bold' mr={1}>
                            DNI:
                        </Typography>
                        <Typography>{persona.documento}</Typography>
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Typography fontWeight='bold' mr={1}>
                            Mail:
                        </Typography>
                        <Typography>{persona.mail}</Typography>
                    </Box>
                </Container>
            ))}
        </div>
    );
};

export default VerPersona;
