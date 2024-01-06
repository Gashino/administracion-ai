import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, keyframes } from '@mui/material';

export const CardNoSelect = () => {
    const rotateAnimation = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }`;

    const cardStyle = {
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        height: "500px",
        width: "650px",
        marginTop: '90px',
        boxShadow: 'none',
        };

    const containerStyle = {
        fontSize: '150px',
        animation: `${rotateAnimation} 10s linear infinite`,
    };

    return (
        <Card sx={cardStyle}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Container fixed sx={containerStyle}>⚙️</Container>
            </CardContent>
        </Card>
    );
};
