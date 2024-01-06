import React from 'react';
import empresarioImage from '../recursos/empresarioHomePage.webp.png';
import "../paginas/Home.css"

const Homepage = ({ user }) => {
    return (
        <div className="homepage">
            <div className='content'>
                {user.mail.length===0 && user.documento.length===0 ? (
                    <div className='text-section'>
                            <h1>Bienvenido al <span className='color-special'>Administrador de Edificios</span></h1> 
                        <p className="custom-typography">
                            Bienvenido a nuestra plataforma de administración de edificios. Aquí podrás gestionar de manera eficiente los recursos y las personas que habitan en ellos.
                        </p>
                    </div>) : (
                    <div className='text-section'>
                        <h1>Bienvenido <span className='color-special'>{user.nombre}</span></h1>
                        {
                            user.isAdmin === false ? (
                                <p className="custom-typography">Como <strong>usuario</strong> podrás crear y ver todos tus reclamos</p>
                            ) : (
                                <p className="custom-typography">
                                    Con tu rol de <strong>administrador</strong> podrás crear reclamos y gestionarlos, dar de alta y baja a personas y ver informacion relacionada a los edificios asociados.
                                </p>
                            )
                        }
                    </div>)}
                <div className='image-section'>
                    <img
                        src={empresarioImage}
                        alt="Administrador de Edificio"
                        className="admin-image"
                    />
                </div>
            </div>
            <p className='copyright-footer'>© 2023 Pedro Esteban y Axel Gaggino. Todos los derechos reservados.</p>
        </div>
    )
};

export default Homepage;
