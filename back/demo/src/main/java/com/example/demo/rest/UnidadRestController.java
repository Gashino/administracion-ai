package com.example.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.MensajeRespuesta;
import com.example.demo.exceptions.PersonaException;
import com.example.demo.exceptions.UnidadException;

@RestController
@RequestMapping("/unidad")
public class UnidadRestController {
	
	@Autowired
	Controlador controlador;
	
	@GetMapping("/listarDuenios/{edificio}/{piso}/{numero}")
	public ResponseEntity<?> dueniosUnidad(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero) {
		try {
			return ResponseEntity.ok(controlador.dueniosPorUnidad(edificio, piso, numero));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@GetMapping("/listarInquilino/{edificio}/{piso}/{numero}")
	public ResponseEntity<?> inquilinosUnidad(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero) {
		try {
			return ResponseEntity.ok(controlador.inquilinosPorUnidad(edificio, piso, numero));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}

	@PutMapping("/transferir/{edificio}/{piso}/{numero}/{documento}")
	public ResponseEntity<?> transferirUnidad(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero, @PathVariable String documento) {
		try {
			controlador.transferirUnidad(edificio, piso, numero, documento);
			return ResponseEntity.ok(new MensajeRespuesta("Transferido"));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@PutMapping("/agregarDuenio/{edificio}/{piso}/{numero}/{documento}")
	public ResponseEntity<?> agregarDuenio(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero, @PathVariable String documento) {
		try {
			controlador.agregarDuenioUnidad(edificio, piso, numero, documento);
			return ResponseEntity.ok(new MensajeRespuesta("Duenio agregado"));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		} catch(UnidadException e ) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	
	@PutMapping("/alquilar/{edificio}/{piso}/{numero}/{documento}")
	public ResponseEntity<?> alquilarUnidad(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero, @PathVariable String documento) {
		try {
			controlador.alquilarUnidad(edificio, piso, numero, documento);
			return ResponseEntity.ok(new MensajeRespuesta("Alquilada"));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@PutMapping("/agregarInquilino/{edificio}/{piso}/{numero}/{documento}")
	public  ResponseEntity<?>  agregarInquilino(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero, @PathVariable String documento){
		try {
			controlador.agregarInquilinoUnidad(edificio, piso, numero, documento);
			return  ResponseEntity.ok(new MensajeRespuesta("ok"));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@PutMapping("/liberar/{edificio}/{piso}/{numero}")
	public  ResponseEntity<?> liberar(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero) {
		try {
			controlador.liberarUnidad(edificio, piso, numero);
			return  ResponseEntity.ok(new MensajeRespuesta("ok"));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@PutMapping("/habitar/{edificio}/{piso}/{numero}")
	public  ResponseEntity<?> habitar(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero) {
		try {
			controlador.habitarUnidad(edificio, piso, numero);
			return  ResponseEntity.ok(new MensajeRespuesta("ok"));
		} catch (UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@PostMapping("/agregar/{edificio}/{piso}/{numero}")
	public ResponseEntity<?> agregarUnidad(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero){
		try {
			controlador.agregarUnidEdificio(edificio, piso, numero);
			return  ResponseEntity.ok(new MensajeRespuesta("ok"));
			
		}
		catch(Exception e) {
			return  ResponseEntity.ok(new MensajeRespuesta(e.getMessage()));
		}
		
	}
	
	@DeleteMapping("/eliminar/{edificio}/{piso}/{numero}")
	public ResponseEntity<?> eliminarUnidad(@PathVariable int edificio, @PathVariable String piso, @PathVariable String numero){
	try {
		controlador.eliminarUnidadEdificio(edificio, piso, numero);
		return  ResponseEntity.ok(new MensajeRespuesta("ok"));
	
		}
		catch(Exception e) {
			return  ResponseEntity.ok(new MensajeRespuesta(e.getMessage()));
		}	
	}
	
	
	
}
