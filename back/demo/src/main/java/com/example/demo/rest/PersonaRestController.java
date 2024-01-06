package com.example.demo.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.MensajeRespuesta;
import com.example.demo.exceptions.PersonaException;
import com.example.demo.exceptions.ReclamoException;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.modelo.Persona;

@RestController
@RequestMapping("/persona")
public class PersonaRestController {
	
	@Autowired
	Controlador controlador;

	@PostMapping("/agregar")
	public ResponseEntity<MensajeRespuesta> agregarPersona(@RequestBody Persona persona){
		
		try {
			controlador.agregarPersona(persona.getDocumento(),persona.getNombre(),persona.getMail(),persona.getPassword(),persona.getIsAdmin());
			return ResponseEntity.ok(new MensajeRespuesta("Persona ag"));
		}
		catch(PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(new MensajeRespuesta("Error " + e.getMessage()));
		}
		
		
	}
	
	@DeleteMapping("/eliminar/{documento}")
	public ResponseEntity<?> eliminarPersona(@PathVariable String documento){
		try {
			controlador.eliminarPersona(documento);
			return ResponseEntity.ok(new MensajeRespuesta("Eliminado!"));
		}
		catch(PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(new MensajeRespuesta("Error " + e.getMessage()));
		}
		catch(UnidadException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MensajeRespuesta("Error " + e.getMessage()));
		}
		catch(ReclamoException e) {
			return ResponseEntity.status(HttpStatus.LOCKED).body(new MensajeRespuesta("Error " + e.getMessage()));
		}
	}
	
	@GetMapping("/buscar/{documento}")
	public ResponseEntity<?> buscarPorDocumento(@PathVariable String documento){
		try {
			return ResponseEntity.ok(controlador.buscarPersona(documento));
		}
		catch(PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(new MensajeRespuesta("Error " + e.getMessage()));
		}
	}
	
	
	@PutMapping("/modificar")
	public ResponseEntity<?> modificarPersona (@RequestBody Persona persona){
		try {
			controlador.modificarPersona(persona.getDocumento(), persona.getNombre(),persona.getMail(), persona.getPassword(),persona.getIsAdmin());
			return ResponseEntity.ok(new MensajeRespuesta("Persona modificada"));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(new MensajeRespuesta("Error " + e.getMessage()));
		}
	}
	
	@GetMapping("/listarPorMail-password/{mail}/{password}")
	public ResponseEntity <?> buscarPersonaMail (@PathVariable String mail, @PathVariable String password){
		try {
			return ResponseEntity.ok(controlador.buscarPorMailYPassword(mail, password));
		} catch (PersonaException e) {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(new MensajeRespuesta("Error " + e.getMessage()));
		}
	}
	
	
}
