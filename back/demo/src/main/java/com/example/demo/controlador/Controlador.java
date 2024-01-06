package com.example.demo.controlador;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

import com.example.demo.exceptions.EdificioException;
import com.example.demo.exceptions.PersonaException;
import com.example.demo.exceptions.ReclamoException;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Imagen;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Reclamo;
import com.example.demo.modelo.Unidad;
import com.example.demo.repository.EdificioRepository;
import com.example.demo.repository.ImagenRepository;
import com.example.demo.repository.PersonaRepository;
import com.example.demo.repository.ReclamoRepository;
import com.example.demo.repository.UnidadRepository;
import com.example.demo.views.EdificioView;
import com.example.demo.views.Estado;
import com.example.demo.views.ImagenView;
import com.example.demo.views.PersonaView;
import com.example.demo.views.ReclamoView;
import com.example.demo.views.UnidadView;

@Controller
public class Controlador {
	
	private static Controlador instancia;
	
	@Autowired
	PersonaRepository personaRepository;
	@Autowired
	ReclamoRepository reclamoRepository;
	@Autowired
	EdificioRepository edificioRepository;
	@Autowired 
	UnidadRepository unidadRepository;
	@Autowired
	ImagenRepository imagenRepository;

	private Controlador() { }
	
	public static Controlador getInstancia() {
		if(instancia == null)
			instancia = new Controlador();
		return instancia;
	}
	
	public List<EdificioView> getEdificios(){
		List<EdificioView> resultado = new ArrayList<EdificioView>();
		List<Edificio> edificios = edificioRepository.findAll();
		for(Edificio e : edificios) {
			EdificioView ediView = e.toView();
			resultado.add(ediView);
		}
		return resultado;
		
	}
	
	public List<UnidadView> getUnidadesPorEdificio(int codigo) throws EdificioException{
		List<UnidadView> resultado = new ArrayList<UnidadView>();
		Edificio edificio = buscarEdificio(codigo);
		List<Unidad> unidades = edificio.getUnidades();
		for(Unidad unidad : unidades)
			resultado.add(unidad.toView());
		return resultado;
	}

	public List<PersonaView> habilitadosPorEdificio(int codigo) throws EdificioException{
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		Edificio edificio = buscarEdificio(codigo);
		Set<Persona> habilitados = edificio.habilitados();
		for(Persona persona : habilitados)
			resultado.add(persona.toView());
		return resultado;
	}

	public List<PersonaView> dueniosPorEdificio(int codigo) throws EdificioException{
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		Edificio edificio = buscarEdificio(codigo);
		Set<Persona> duenios = edificio.duenios();
		for(Persona persona : duenios)
			resultado.add(persona.toView());
		return resultado;
	}

	public List<PersonaView> habitantesPorEdificio(int codigo) throws EdificioException{
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		Edificio edificio = buscarEdificio(codigo);
		Set<Persona> habitantes = edificio.duenios();
		for(Persona persona : habitantes)
			resultado.add(persona.toView());
		return resultado;
	}

	public List<PersonaView> dueniosPorUnidad(int codigo, String piso, String numero) throws UnidadException{
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		Unidad unidad = buscarUnidad(codigo, piso, numero);
		List<Persona> duenios = unidad.getDuenios();
		for(Persona persona : duenios)
			resultado.add(persona.toView());
		return resultado;
	}

	public List<PersonaView> inquilinosPorUnidad(int codigo, String piso, String numero) throws UnidadException{
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		Unidad unidad = buscarUnidad(codigo, piso, numero);
		List<Persona> inquilinos = unidad.getInquilinos();
		for(Persona persona : inquilinos)
			resultado.add(persona.toView());
		return resultado;
	}
	
	public void transferirUnidad(int codigo, String piso, String numero, String documento) throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			unidad.transferir(persona);
			unidadRepository.save(unidad);
			System.out.println("Unidad transferida");
		} catch (UnidadException e) {
		    throw new UnidadException(e.getMessage());
		}catch(PersonaException e){
		    throw new PersonaException(e.getMessage());
		}
	
		
	}

	public void agregarDuenioUnidad(int codigo, String piso, String numero, String documento) throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			unidad.agregarDuenio(persona);
			unidadRepository.save(unidad);
			System.out.println("Duenio agregado");
			
		} catch (UnidadException e) {
			throw new UnidadException(e.getMessage());
		}catch(PersonaException e){
			throw new PersonaException(e.getMessage());
		}
	}

	public void alquilarUnidad(int codigo, String piso, String numero, String documento) throws UnidadException, PersonaException{
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			unidad.alquilar(persona);
			unidadRepository.save(unidad);
			System.out.println("Unidad alquilada");
		} catch (UnidadException e) {
			throw new UnidadException(e.getMessage());
		} catch(PersonaException e) {
			throw new PersonaException(e.getMessage());
		}
	}

	public void agregarInquilinoUnidad(int codigo, String piso, String numero, String documento) throws UnidadException, PersonaException{
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			unidad.agregarInquilino(persona);
			unidadRepository.save(unidad);
			System.out.println("Inquilino agregado");
		} catch (UnidadException e) {
			throw new UnidadException(e.getMessage());
		} catch(PersonaException e) {
			throw new PersonaException(e.getMessage());
			}
		
	}

	public void liberarUnidad(int codigo, String piso, String numero) throws UnidadException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			unidad.liberar();
			unidadRepository.save(unidad);
			System.out.println("Unidad liberada");
		} catch (UnidadException e) {
			throw new UnidadException(e.getMessage());
		}
		
	}

	public void habitarUnidad(int codigo, String piso, String numero) throws UnidadException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			unidad.habitar();
			unidadRepository.save(unidad);
			System.err.println("Unidad habitada");
			
		} catch (UnidadException e) {
			throw new UnidadException(e.getMessage());
		}
	}
	
	public void agregarPersona(String documento, String nombre, String mail, String password, boolean isAdmin) throws PersonaException{
		Persona persona = new Persona(documento, nombre, mail, password, isAdmin);
		if(personaRepository.findById(documento).isEmpty()) {
			personaRepository.save(persona);
		}
		else {
			throw new PersonaException("Ya existe tal persona");
		}
	}
	
	public void modificarPersona(String documento, String nombre, String mail, String password, boolean isAdmin) throws PersonaException {
		Persona persona = new Persona(documento,nombre,mail,password,isAdmin);
		if(personaRepository.findById(documento).isPresent()) {
			personaRepository.save(persona);
		}
		else {
			throw new PersonaException("Persona inexsitente");
		}
	}
	
	public void eliminarPersona(String documento) throws PersonaException, UnidadException, ReclamoException {
		Persona persona = buscarPersona(documento);
		List<Reclamo> reclamos =reclamoRepository.findByUsuario(persona);
		for (Reclamo reclamo : reclamos) {
			reclamoRepository.delete(reclamo);
		}
		personaRepository.delete(persona);
	}
	
	public PersonaView buscarPorMailYPassword(String mail, String Password) throws PersonaException {
		Optional<Persona> persona= personaRepository.findByMailAndPassword(mail, Password);
		if(persona.isPresent()) {
			return persona.get().toView();
		}
		else {
			throw new PersonaException("No existe tal persona");
		}
	}
		
	public List<ReclamoView> reclamosPorEdificio(int codigo) throws EdificioException{
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		Edificio edificio = buscarEdificio(codigo);
		List<Reclamo>reclamos = reclamoRepository.findByEdificio(edificio);
		for(Reclamo reclamo : reclamos) {
			resultado.add(reclamo.toView());
		}
		return resultado;
	}
	

	public List<ReclamoView> reclamosPorUnidad(int codigo, String piso, String numero) throws UnidadException {
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		Unidad unidad= buscarUnidad(codigo,piso,numero);
		List<Reclamo> reclamos = reclamoRepository.findByUnidad(unidad);
		for(Reclamo reclamo:reclamos) {
			resultado.add(reclamo.toView());
		}
		return resultado;
	}
	

	public ReclamoView reclamosPorNumero(int numero) throws ReclamoException {
		Optional<Reclamo> reclamoAux = reclamoRepository.findById(numero);
		if(reclamoAux.isPresent()) {
			Reclamo reclamo = reclamoAux.get();
			ReclamoView reclamoRes = reclamo.toView();
			return reclamoRes;
		}
		else {throw new ReclamoException("Reclamo inexistente");}
	}
	

	public List<ReclamoView> reclamosPorPersona(String documento) throws PersonaException{
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		Persona persona = buscarPersona(documento);
		List<Reclamo>reclamos = reclamoRepository.findByUsuario(persona);
		for(Reclamo r : reclamos) {
			resultado.add(r.toView());
		}
		return resultado;	
	}
 
	public int agregarReclamo(int codigo, String piso, String numero, String documento, String ubicacion, String descripcion) throws EdificioException, UnidadException, PersonaException, ReclamoException {
			boolean esApto = false;
			Edificio edificio = buscarEdificio(codigo);
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			
			for (Persona p : unidad.getInquilinos()) {
				if(p.getDocumento().equalsIgnoreCase(persona.getDocumento())) {
					esApto=true;
				}
			}
			
			for (Persona p : unidad.getDuenios()) {
				if(p.getDocumento().equalsIgnoreCase(persona.getDocumento())) {
					esApto=true;
				}
			}
			
			if(esApto) {
				Reclamo reclamo = new Reclamo(persona, edificio, ubicacion, descripcion, unidad);				
				reclamoRepository.save(reclamo);
				return reclamo.getNumero();
			}
			
			else {
				throw new ReclamoException("Persona no es apta para generar el reclamo");
			}

		
		
	}
	
	public void agregarImagenAReclamo(int numero, String direccion, String tipo) throws ReclamoException {
		try {
			Reclamo reclamo = buscarReclamo(numero);
			reclamo.agregarImagen(direccion, tipo);
			reclamoRepository.save(reclamo);
			System.out.println("Imagen agregada con exito");
		} catch (ReclamoException e) {
			System.err.println("Error en la carga de la imagen");
		}
		
		
	}
	
	public void cambiarEstado(int numero, Estado estado) throws ReclamoException {
		
		try {
			Reclamo reclamo = buscarReclamo(numero);
			reclamo.cambiarEstado(estado);
			reclamoRepository.save(reclamo);
			System.out.println("Estado cambiado con exito a: " + Strings.toRootUpperCase(reclamo.getEstado().toString()));
		} catch (ReclamoException e) {
			System.out.println("Error en el cambio de estado");
		}
		
	}
	

	public Edificio buscarEdificio(int codigo) throws EdificioException {
		Optional<Edificio> edificioOptional = edificioRepository.findById(codigo);
		if(edificioOptional.isPresent()) {
			Edificio edificio = edificioOptional.get();
			return edificio;
		}
		else {
			throw new EdificioException("Error de edificio");
			
		}
	}

	public Unidad buscarUnidad(int codigo, String piso, String numero) throws UnidadException{
		Optional<Unidad> unidadOptional = unidadRepository.findByEdificioAndPisoAndNumero(edificioRepository.findById(codigo).get(), piso, numero);
		if(unidadOptional.isPresent()) {
			Unidad unidad = unidadOptional.get();
			return unidad;
		}
		else {
			throw new UnidadException("No existe la unidad!");
		}
		
		
	}	
	
	public Persona buscarPersona(String documento) throws PersonaException {
		Optional<Persona> personaOptional = personaRepository.findById(documento);
		if(personaOptional.isPresent()) {
			Persona persona = personaOptional.get();
			if(persona.getPassword()==null) {
				persona.setPassword("");
				persona.setIsAdmin(false);
			}
			return persona;
		}
		else {
		throw new PersonaException("No existe la persona!");
		}
	}
	
	public Reclamo buscarReclamo(int numero) throws ReclamoException {
		Optional<Reclamo> reclamoOptional = reclamoRepository.findById(numero);
		if(reclamoOptional.isPresent()) {
			Reclamo reclamo = reclamoOptional.get();
			return reclamo;
		}
		else {
			throw new ReclamoException("No existe el reclamo!");
		}
	}
	
	public void eliminarReclamo(int numero)throws ReclamoException{
		Optional<Reclamo> reclamoOptional = reclamoRepository.findById(numero);
		if(reclamoOptional.isPresent()) {
			Reclamo reclamo = reclamoOptional.get();
			List<Imagen> imagenes = imagenRepository.findByReclamo(reclamo);
			imagenRepository.deleteAll(imagenes);
			reclamoRepository.deleteById(numero);
		}
		else {
			throw new ReclamoException("No existe el reclamo!");
		}
	}
	
	public void modificarDatos(int numero,String ubicacion, String descripcion) throws ReclamoException{
		Optional<Reclamo> reclamoOptional = reclamoRepository.findById(numero);
		if(reclamoOptional.isPresent()) {
			Reclamo reclamo= reclamoOptional.get();
			reclamo.setUbicacion(ubicacion);
			reclamo.setDescripcion(descripcion);
			reclamoRepository.save(reclamo);
		}
		else {
			throw new ReclamoException("No existe tal reclamo");
		}
	}
	
	public void agregarEdificio (String nombre, String direccion ) throws EdificioException {
		try {
			Edificio edificio = new Edificio(nombre,direccion);
			edificioRepository.save(edificio);
		}catch (Exception e){
			throw new EdificioException("Error");
		}
	}
	
	public void eliminarEdificio(int numero) throws EdificioException {
		Optional<Edificio> edificioOpt = edificioRepository.findById(numero);
		if(edificioOpt.isPresent()){
			Edificio edificio = edificioOpt.get();
			List<Unidad> unidades = unidadRepository.findByEdificio(edificio);
			List<Reclamo> reclamos = reclamoRepository.findByEdificio(edificio);
			for (Reclamo reclamo : reclamos) {
				reclamoRepository.delete(reclamo);
			}
			
			for (Unidad unidad : unidades) {
				unidad.liberar();
				unidadRepository.delete(unidad);
			}
			
			edificioRepository.delete(edificio);
		}
		else {
			throw new EdificioException("No se puede eliminar un edificio inexistente");
		}
	}
	
	public void eliminarUnidadEdificio(int numeroEdificio, String piso, String departamento) throws EdificioException, UnidadException{
		Optional<Edificio> edificioOpt = edificioRepository.findById(numeroEdificio);
		
		if(edificioOpt.isPresent()) {
			Edificio edificio = edificioOpt.get();
			Optional<Unidad> unidadOpt = unidadRepository.findByEdificioAndPisoAndNumero(edificio,piso,departamento);
			if(unidadOpt.isPresent()) {
				Unidad unidad = unidadOpt.get();
				unidadRepository.delete(unidad);
			}
			else {
				throw new UnidadException("No se puede eliminar una unidad inexistente");
			}
		}
		else {
			throw new EdificioException("No se puede eliminar una unidad de un edificio inexistente");
		}
		
	}
	
	public void agregarUnidEdificio(int numeroEdificio, String piso, String departamento) throws UnidadException, EdificioException{
		Optional<Edificio> edificioOpt = edificioRepository.findById(numeroEdificio);
		
		if(edificioOpt.isPresent()) {
			Edificio edificio = edificioOpt.get();
			Optional<Unidad> unidadOpt = unidadRepository.findByEdificioAndPisoAndNumero(edificio,piso,departamento);
			if(unidadOpt.isPresent()) {
				throw new UnidadException("No se puede agregar una unidad inexistente");
			}
			else {
				Unidad unidad = new Unidad(piso, departamento, edificio);
				unidadRepository.save(unidad);
			}
		}
		else {
			throw new EdificioException("No se puede agregar una unidad a un edificio inexistente");
		}
		
	}
	
	public List<ReclamoView> reclamosPorInquilino(String dni) throws PersonaException{
		List<Reclamo> reclamos = new ArrayList<>();
		List<ReclamoView> resultado= new ArrayList<>();
		Optional<Persona> personaOpt= personaRepository.findById(dni);
		if(personaOpt.isPresent()) {
			Persona persona = personaOpt.get();
			for (Unidad unidad : unidadRepository.findByDocumento(persona.getDocumento())) {
				reclamos.addAll(reclamoRepository.findByUnidad(unidad));
			}
			for (Reclamo reclamo : reclamos) {
				resultado.add(reclamo.toView());
			}
		}
		else {
			throw new PersonaException("No existe la persona");
		}
		return resultado;
	}
	
	
	public List<ImagenView> imagenPorReclamo(int numero) throws ReclamoException{
		Optional<Reclamo> reclamoOpt = reclamoRepository.findById(numero);
		List<Imagen> imagenes= new ArrayList<>();
		List<ImagenView> resultado= new ArrayList<>();
		if(reclamoOpt.isPresent()) {
			Reclamo reclamo = reclamoOpt.get();
			imagenes.addAll(imagenRepository.findByReclamo(reclamo));
			for (Imagen imagen : imagenes) {
				resultado.add(imagen.toView());
			}
			
		}
		else {
			throw new ReclamoException("Reclamo inexistente");
		}
		return resultado;
	}
	
	
}
