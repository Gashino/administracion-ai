import React from 'react';
import { useUsuarios } from '../context/UsuarioContext';

const UsuariosList = () => {
    const { usuarios } = useUsuarios();

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsuariosList;
