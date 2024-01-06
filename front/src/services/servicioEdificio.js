export async function getEdificiosService(setIsLoading,setEdificios){
    fetch(`http://localhost:8080/edificio/listar`).then(response=>{
      if(!response.ok){
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
      return response.json();
    })
    .then(data=>{
      setEdificios(data)
      setIsLoading(false)
    })
    .catch(error=>{console.log(error)})

}

export async function getDueniosEdificioService(edificio,setIsLoading,setDuenios){
  fetch(`http://localhost:8080/edificio/listarDueniosEdificio/${edificio}`).then(response=>{
    if(!response.ok){
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return response.json();
  })
  .then(data=>{
    setDuenios(data)
    setIsLoading(false)
  })
  .catch(error=>{
      console.log(error)})
}

export async function getHabilitadosEdificioService(edificio,setIsLoading,setHabilitados){
  fetch(`http://localhost:8080/edificio/listarHabilitadosEdificio/${edificio}`).then(response=>{
    if(!response.ok){
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return response.json();
  })
  .then(data=>{
    setHabilitados(data)
    setIsLoading(false)
  })
  .catch(error=>{
      console.log(error)})
}

export async function getHabitadosEdificioService(edificio,setIsLoading,setHabitados){
  fetch(`http://localhost:8080/edificio/listarHabitantesEdificio/${edificio}`).then(response=>{
    if(!response.ok){
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return response.json();
  })
  .then(data=>{
    setHabitados(data)
    setIsLoading(false)
  })
  .catch(error=>{
      console.log(error)})
}


export async function getUnidadesEdificioService(edificio,setIsLoading,setUnidades){
  fetch(`http://localhost:8080/edificio/listarUnidadesEdificio/${edificio}`).then(response=>{
    if(!response.ok){
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return response.json();
  })
  .then(data=>{
    setUnidades(data)
    setIsLoading(false)
  })
  .catch(error=>{
      console.log(error)})
}

export function agregarEdificioService(nombre,direccion,setError){
  fetch(`http://localhost:8080/edificio/agregar/${nombre}/${direccion}`,{method:'POST'}).then(response=>{
    if(!response.ok){
      setError("error")
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    setError("pass")
  }).catch(error=>{
    console.log(error)
  })
}

export function eliminarServicioService(idEdificio,setError){
  fetch(`http://localhost:8080/edificio/eliminar/${idEdificio}`,{method:'DELETE'}).then(response=>{
    if(!response.ok){
      setError("error")
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    setError("pass")
  }).catch(error=>{
    console.log(error)
  })
}