import backgroundImage from '../recursos/edificio-background.jpg'

export const userObj = {
  documento: "",
  nombre: "",
  mail: "",
  contrasenia: "",
  isAdmin: false
}
export const options = [
  'Reclamo',
  'Persona',
];

export const appStyle = {
  background: `url(${backgroundImage}) center/cover no-repeat fixed`,
  height: "100vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};


export const cardContainerStyle = {
  marginTop: "25px",
};
