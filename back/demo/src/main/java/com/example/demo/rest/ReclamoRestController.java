package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.EdificioException;
import com.example.demo.exceptions.MensajeRespuesta;
import com.example.demo.exceptions.PersonaException;
import com.example.demo.exceptions.ReclamoException;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Imagen;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Reclamo;
import com.example.demo.modelo.Unidad;
import com.example.demo.views.Estado;
import com.example.demo.views.ReclamoView;

@RestController

@RequestMapping("/reclamo")
public class ReclamoRestController {
	
	@Autowired
	Controlador controlador;
	
	@GetMapping("/listarPorEdificio/{codigo}")
	public ResponseEntity<?> getReclamosPorEdificio(@PathVariable int codigo) {
	    try {
	        return ResponseEntity.ok(controlador.reclamosPorEdificio(codigo));
	    } catch (EdificioException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MensajeRespuesta(e.getMessage()));
	    }
	}
	
	@GetMapping("/listarPorUnidad/{edificio}/{piso}/{numero}")
	public ResponseEntity<?> reclamoPorUnidad(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero ){
		try {
			return ResponseEntity.ok(controlador.reclamosPorUnidad(edificio, piso, numero));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@GetMapping("/listarPorCodigo/{codigo}")
	public ResponseEntity<?> reclamoPorUnidad(@PathVariable int codigo){
		try {
			return ResponseEntity.ok(controlador.reclamosPorNumero(codigo));
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	

	@GetMapping("/listarPorPersona/{documento}")
	public ResponseEntity<?> reclamoPorUnidad(@PathVariable String documento){
		try {
			return ResponseEntity.ok(controlador.reclamosPorPersona(documento));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	
//	@DeleteMapping("/eliminar/{id}")
//	public ResponseEntity<?> eliminarPorId(@PathVariable int id) {
//		try {
//			 controlador.eliminarReclamo(id);
//			 return ResponseEntity.ok(new MensajeRespuesta("Eliminado"));
//		}catch(ReclamoException e) {
//			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(new MensajeRespuesta(e.getMessage()));
//		}
//	}
//	
	
	@PostMapping("/agregarReclamo/{codigoEdificio}/{piso}/{numero}/{documento}/{ubicacion}/{descripcion}")
	public ResponseEntity<?> agregarReclamo(@PathVariable int codigoEdificio,@PathVariable String piso, @PathVariable String numero, @PathVariable String documento,@PathVariable String ubicacion, @PathVariable String descripcion ){	
		try {
			Edificio edificio = controlador.buscarEdificio(codigoEdificio);
			Unidad unidad = controlador.buscarUnidad(codigoEdificio, piso, numero);
			Persona persona = controlador.buscarPersona(documento);
			Integer codReclamo =controlador.agregarReclamo(edificio.getCodigo(), unidad.getPiso(), unidad.getNumero(), 	
			persona.getDocumento(), ubicacion, descripcion);
			return ResponseEntity.ok(codReclamo);
		} catch (EdificioException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}catch(ReclamoException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
		
	}
	
	@PutMapping("/cambiarEstado/{codigo}/{estado}")
	public void cambiarEstado(@PathVariable int codigo,@PathVariable String estado){
		try {
			controlador.cambiarEstado(codigo, Estado.valueOf(estado));
		} catch (ReclamoException e) {
			ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@PostMapping("/agregarImagen/{codigo}/{url}/{tipo}")
	public void agregarImagen(@PathVariable int codigo,@PathVariable String url, @PathVariable String tipo) {
		try {
			controlador.agregarImagenAReclamo(codigo, url, tipo);
		} catch (ReclamoException e) {
			System.out.println("no");
			ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@PutMapping("/modificar/{codigo}/{ubicacion}/{descripcion}")
	public void modificarDatosReclamo(@PathVariable int codigo, @PathVariable String ubicacion, @PathVariable String descripcion) {
		try {
			controlador.modificarDatos(codigo,ubicacion,descripcion);
		}catch(ReclamoException e) {
			ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
		
	}
	
	
	@GetMapping("/reclamosPorInquilino/{documento}")
	public ResponseEntity<?> reclamoPorInqulino(@PathVariable String documento) {
		try {
			return ResponseEntity.ok(controlador.reclamosPorInquilino(documento));
		}catch(Exception e) {
			return 	ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@GetMapping("/imagenes/{codigo}")
	public ResponseEntity<?> imagenPorReclamo(@PathVariable int codigo){
		try {
			return ResponseEntity.ok(controlador.imagenPorReclamo(codigo));
		}catch(ReclamoException e) {
			return 	ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	} 
	
}
