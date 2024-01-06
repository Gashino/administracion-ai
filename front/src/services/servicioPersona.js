import { userObj } from "../constants/consts";


//REST - GET - BUSCAR PERSONA MAIL-CONTRA
export async function fetchUserData(mail, password, setError, setErrorBool, onClose) {
  try {
    const response = await fetch(`http://127.0.0.1:8080/persona/listarPorMail-password/${mail}/${password}`);
    if (response.ok) {
      const userData = await response.json();
      setError("pass")
      setErrorBool(false)
      onClose()
      return userData;
    } else {
      setErrorBool(true)
      setError("error")
      return userObj;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    setError("error")
    return userObj;
  }
}


//REST - POST - AGREGAR PERSONA JSON
export function agregarPersona(nombre, mail, dni, contrasenia, setError) {
  const url = `http://127.0.0.1:8080/persona/agregar`

  const data = {
    documento: dni,
    nombre: nombre,
    mail: mail,
    password: contrasenia,
    isAdmin: false
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then((response) => {
      setError("pass")
    })
    .catch((error) => {
      console.error('Error:', error);
      setError("error")
    });
}

//REST - GET - BUSCAR PERSONA DNI
export function buscarPersonaDni(dni, setUser, setError) {

  fetch(`http://localhost:8080/persona/buscar/${dni}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      return (res.json())
    })
    .then((response) => {
      setUser(response)
    })
    .catch((error) => {
      setError("error")
      console.log('Error:', error);
    })
}

//REST - PUT - MODIFICAR PERSONA
export function modificarPersona(nombre, mail, dni, contrasenia, isAdmin, setError) {
  const url = `http://localhost:8080/persona/modificar`
  const data = {
    documento: dni,
    nombre: nombre,
    mail: mail,
    password: contrasenia,
    isAdmin: isAdmin
  }

  fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(data) })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      setError("pass")
      return (res.json())
    }).catch((error) => {
      setError("error")
      console.log('Error:', error);
    })


}
// REST DELETE PERSONA
export function eliminarPersona(dni, setError) {
  const url = `http://localhost:8080/persona/eliminar/${dni}`
  fetch(url, { method: 'DELETE'})
    .then((res) => {
      if (!res.ok) {
        setError("error")
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      setError("pass")
      return (res.json())
    }).catch((error) => {
      console.log('Error:', error);
    })
}
