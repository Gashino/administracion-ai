import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useLocation } from 'react-router';
import Homepage from './HomePage';

const CardOptions = ({ children }) => {

    const location = useLocation()

    const cardStyle = {
        backdropFilter: "blur(20px)",
        background: "#fbf9eaa5",
        display: "flex",
        justifyContent: "center",
        height: "700px",
        width: "720px",
        boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
        overflow: 'auto',
        marginTop:'100px'
    };


    return (
        <>
            {location.pathname === '/home' ? (<Homepage user={null} />) :
                (<Card sx={cardStyle}>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>)
            }
        </>
    );
};

export default CardOptions;
