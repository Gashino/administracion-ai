import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { containerStyleVerReclamo } from "../constants/cssConst";
import { getImageByCodService } from "../services/servicioReclamo";

export const VerReclamoData = ({ reclamos }) => {
  const [loadedReclamos, setLoadedReclamos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadReclamos = async () => {
      setIsLoading(true);
      const reclamosWithImages = await Promise.all(
        reclamos.map(async (reclamo) => {
          const images = await getImageByCodService(reclamo.numero);
          return { ...reclamo, images };
        })
      );
      setLoadedReclamos(reclamosWithImages);
      setIsLoading(false);
    };

    loadReclamos();
  }, [reclamos]);

  const handleClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    loadedReclamos.map((reclamo, index) => (
      <Container
        key={index}
        sx={{
          border: '1px solid #434240a4',
          width: '500px',
          borderRadius: '10px',
          padding: '10px',
          mb: '10px',
        }}
      >
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>ID Reclamo: </Typography>
          <Typography color={'blue'}>{reclamo.numero}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>DNI Persona: </Typography>
          <Typography>{reclamo.usuario.documento}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>Codigo Edificio: </Typography>
          <Typography>{reclamo.edificio.codigo}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>Direccion: </Typography>
          <Typography>{reclamo.edificio.direccion}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>Piso:  </Typography>
          <Typography>{reclamo.unidad.piso}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>Departamento: </Typography>
          <Typography>{reclamo.unidad.numero}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>Ubicacion: </Typography>
          <Typography>{reclamo.ubicacion}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>Descripcion: </Typography>
          <Typography>{reclamo.descripcion}</Typography>
        </Container>
        <Container style={containerStyleVerReclamo}>
          <Typography sx={{ fontWeight: 'bold' }}>Estado:  </Typography>
          <Typography color={'red'}>{reclamo.estado.toUpperCase()}</Typography>
        </Container>
        {reclamo.images &&
          reclamo.images.map((imagen, i) => (
            <Container key={i} style={containerStyleVerReclamo}>
              <Typography sx={{ fontWeight: 'bold' }}>Imagen:  </Typography>
              <Typography color={'purple'} onClick={() => handleClick(imagen.direccion)}>
                {imagen.direccion.substring(0, 12)}...
              </Typography>
              {selectedImage === imagen.direccion && (
                <Container>
                  <img
                    src={selectedImage}
                    alt="Imagen seleccionada"
                    style={{ width: '200px', height: '200px', marginTop: '10px' }}
                  />
                </Container>
              )}
            </Container>
          ))}
      </Container>
    ))
  );
};
