package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.EdificioException;
import com.example.demo.exceptions.MensajeRespuesta;
import com.example.demo.views.EdificioView;

@RestController
@RequestMapping("/edificio")

public class EdificioRestController {
	
	@Autowired
	Controlador controlador;
	
	@GetMapping("/listar")
	public ResponseEntity<?> getEdificios(){
		return ResponseEntity.ok(controlador.getEdificios());
	}
	
	@GetMapping("/listarUnidadesEdificio/{codigo}")
	public ResponseEntity<?> getUnidadesEdificio(@PathVariable int codigo){
		try {
			return ResponseEntity.ok(controlador.getUnidadesPorEdificio(codigo));
			
		}
		catch(EdificioException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));		
		}
	}
	
	@GetMapping("/listarHabilitadosEdificio/{codigo}")
	public ResponseEntity<?> getHabilitadosPorEdificio(@PathVariable int codigo){
		try {
			return ResponseEntity.ok(controlador.habilitadosPorEdificio(codigo));
			
		}
		catch(EdificioException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));		
		}
	}
	
	@GetMapping("/listarDueniosEdificio/{codigo}")
	public ResponseEntity<?> getDueniosEdificio(@PathVariable int codigo){
		try {
			return ResponseEntity.ok(controlador.dueniosPorEdificio(codigo));
		}
		catch(EdificioException e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	@GetMapping("/listarHabitantesEdificio/{codigo}")
	public ResponseEntity<?> getHabitantesEdificio(@PathVariable int codigo){
		try {
			return ResponseEntity.ok(controlador.habitantesPorEdificio(codigo));
		}
		catch(EdificioException e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}



	@PostMapping("/agregar/{nombre}/{direccion}")
	public ResponseEntity<?> agregarEdificio(@PathVariable String nombre, @PathVariable String direccion){
		try {
			controlador.agregarEdificio(nombre, direccion);
			return ResponseEntity.ok(new MensajeRespuesta("agregado con exito"));
			
		}
		catch(EdificioException e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}		
	}
	
	@DeleteMapping("/eliminar/{numero}")
	public ResponseEntity<?> eliminarEdificio(@PathVariable int numero){
		try {
			controlador.eliminarEdificio(numero);
			return ResponseEntity.ok(new MensajeRespuesta("eliminado con exito"));
		}
		catch(EdificioException e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta(e.getMessage()));
		}
	}
	
	
}
