//GET -> DUENIOS UNIDAD 

export function getDueniosUnidadService(edificio,piso,departamento,setDuenios,setError){
    const url = `http://localhost:8080/unidad/listarDuenios/${edificio}/${piso}/${departamento}`

    fetch(url).then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(respuesta=>{
        setDuenios(respuesta)
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}

// GET -> INQUILINOS

export function getInquilinosUnidadService(edificio,piso,departamento,setInquilinos,setError){
    const url = `http://localhost:8080/unidad/listarInquilino/${edificio}/${piso}/${departamento}`

    fetch(url).then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(respuesta=>{
        setInquilinos(respuesta)
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}

// PUT => TRANSFER UNIDAD
export function transferirUnidadService(edificio,piso,departamento,documento,setError){
    const url = `http://localhost:8080/unidad/transferir/${edificio}/${piso}/${departamento}/${documento}`
    fetch(url,{method:'PUT'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}

//PUT => ADD DUENIO
export function agregarDuenioUnidadService(edificio,piso,departamento,documento,setError){
    const url = `http://localhost:8080/unidad/agregarDuenio/${edificio}/${piso}/${departamento}/${documento}`
    fetch(url,{method:'PUT'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}

//PUT => ALQUILAR UNIDAD
export function alquilarUnidadService(edificio,piso,departamento,documento,setError){
    const url = `http://localhost:8080/unidad/alquilar/${edificio}/${piso}/${departamento}/${documento}`
    fetch(url,{method:'PUT'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}

//PUT => ALQUILAR UNIDAD
export function agregarInquilinoService(edificio,piso,departamento,documento,setError){
    const url = `http://localhost:8080/unidad/agregarInquilino/${edificio}/${piso}/${departamento}/${documento}`
    fetch(url,{method:'PUT'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}

//PUT -> LIBERAR UNIDAD
export function liberarUnidadService(edificio,piso,departamento,setError){
    const url = `http://localhost:8080/unidad/liberar/${edificio}/${piso}/${departamento}`
    fetch(url,{method:'PUT'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}


//PUT -> HABITAR UNIDAD
export function habitarUnidadService(edificio,piso,departamento,setError){
    const url = `http://localhost:8080/unidad/habitar/${edificio}/${piso}/${departamento}`
    fetch(url,{method:'PUT'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}

export function agregarUnidadService(edificio,piso,departamento,setError){
    const url = `http://localhost:8080/unidad/agregar/${edificio}/${piso}/${departamento}`
    fetch(url,{method:'POST'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}


export function eliminarUnidadService(edificio,piso,departamento,setError){
    const url = `http://localhost:8080/unidad/eliminar/${edificio}/${piso}/${departamento}`
    fetch(url,{method:'DELETE'})
    .then(response=>{
        if(!response.ok){
            setError("error")
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        setError("pass")
    })
    .catch(error=>{
        console.log(error)
    })
}