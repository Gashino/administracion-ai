// POST -> CREAR RECLAMO SERVICE
export function crearReclamoService(dni,codigoEdificio,piso,depto,descripcion,ubicacion,setError,setCodReclamo){
    const url = `http://localhost:8080/reclamo/agregarReclamo/${codigoEdificio}/${piso}/${depto}/${dni}/${ubicacion}/${descripcion}`
    fetch(url,{method:'POST'})
    .then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then((response=>{
        setError("pass")
        setCodReclamo(response)
    }))
    .catch((error)=>{console.log(error)})
}


//GET -> RECLAMO POR ID
export function getReclamoByIdService(idReclamo,setError,setReclamo){
    const url= `http://localhost:8080/reclamo/listarPorCodigo/${idReclamo}`
    fetch(url)
    .then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(response=>{
        setError("pass")
        setReclamo(response)
    })
    .catch(error=>{
        console.log(error)
    })
}


// POST -> MODIFICAR RECLAMO SERVICE

export function modificarReclamoService(codigo,descripcion,ubicacion,setError){
    const url = `http://localhost:8080/reclamo/modificar/${codigo}/${ubicacion}/${descripcion}`
    fetch(url,{method:'PUT'})
    .then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        setError("pass")
    })
    .catch((error)=>{console.log(error)})
}

//POST -> AGREGAR IMAGEN AL RECLAMO

export function addImageReclamoService(codigo,dir,tipo,setError){
    const url = `http://localhost:8080/reclamo/agregarImagen/${codigo}/${dir}/${tipo}`;
    fetch(url,{ method: 'POST'})
    .then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        setError("pass")
    })
    .catch((error)=>{console.log(error)})
}

//PUT -> CAMBIAR ESTADO RECLAMO

export function changeStateReclamoService(codigo,estado,setError){
    const url = `http://localhost:8080/reclamo/cambiarEstado/${codigo}/${estado}`

    fetch(url,{method:'PUT'})
    .then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        setError("pass")
    })
    .catch((error)=>{console.log(error)})

}

//GET -> GET RECLAMO BY ID

export function getReclamosByCodigoService(codigo,setError,setReclamos){
    const url= `http://localhost:8080/reclamo/listarPorCodigo/${codigo}`
    
    fetch(url).then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(resultado=>{
        setReclamos(resultado)
    })
    .catch(error=>{
        console.log(error)
    })
}


// GET -> POR PERSONA

export function getReclamosByDniService(dni,setReclamos,setError){

    const url= `http://localhost:8080/reclamo/listarPorPersona/${dni}`
    
    fetch(url).then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(resultado=>{
        setReclamos(resultado)
    })
    .catch(error=>{
        console.log(error)
    })

}

// GET -> POR UNIDAD

export function getReclamosByUnidadService(edificio,piso,unidad,setReclamos,setError){
    const url= `http://localhost:8080/reclamo/listarPorUnidad/${edificio}/${piso}/${unidad}`
    
    fetch(url).then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(resultado=>{
        console.log(resultado)
        setReclamos(resultado)
    })
    .catch(error=>{
        console.log(error)
    })
}


// GET -> POR EDIFICIOS
export function getReclamosByEdificioService(edificio,setReclamos,setError){

    const url= `http://localhost:8080/reclamo/listarPorEdificio/${edificio}`
    
    fetch(url).then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(resultado=>{
        console.log(resultado)
        setReclamos(resultado)
    })
    .catch(error=>{
        console.log(error)
    })

}

export function getReclamosPorInquilino(dni,setReclamos,setError,setIsLoading){
    const url= `http://localhost:8080/reclamo/reclamosPorInquilino/${dni}`
    fetch(url).then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(resultado=>{
        setReclamos(resultado)
        setIsLoading(false)
    })
    .catch(error=>{
        console.log(error)
    })

}

export function getReclamosByUser(dni,setReclamos,setError,setIsLoading){

    const url= `http://localhost:8080/reclamo/listarPorPersona/${dni}`
    
    fetch(url).then((res)=>{
        if(!res.ok){
            setError("error")
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
    })
    .then(resultado=>{
        setIsLoading(false)
        setReclamos(resultado)
    })
    .catch(error=>{
        console.log(error)
    })

}

export function getImageByCodService(cod) {
    const url = `http://localhost:8080/reclamo/imagenes/${cod}`;
  
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((resultado) => {
        return resultado;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }