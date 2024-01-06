package com.example.demo.views;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Imagen;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Unidad;

public class ReclamoView {

	private int numero;
	private PersonaView usuario;
	private EdificioView edificio;
	private String descripcion;
	private UnidadView unidad;
	private String estado;
	private String ubicacion;
	
	public ReclamoView(int numero,Persona usuario, Edificio edificio, String descripcion,Unidad unidad, Estado estado, String ubicacion) {
		this.numero=numero;
		this.usuario = usuario.toView();
		this.edificio = edificio.toView();
		this.descripcion = descripcion;
		this.unidad = unidad.toView();
		this.estado = estado.name();	
		this.ubicacion=ubicacion;
		}
	
	public ReclamoView() {}
	
	
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public PersonaView getUsuario() {
		return usuario;
	}
	public void setUsuario(PersonaView usuario) {
		this.usuario = usuario;
	}
	public EdificioView getEdificio() {
		return edificio;
	}
	public void setEdificio(EdificioView edificio) {
		this.edificio = edificio;
	}

	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public UnidadView getUnidad() {
		return unidad;
	}
	public void setUnidad(UnidadView unidad) {
		this.unidad = unidad;
	}
	

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	

	public String getUbicacion() {
		return ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	@Override
	public String toString() {
		return ("numero reclamo: "+ this.numero + " estado: " + this.estado.toUpperCase() +" edificio: "+ edificio.getCodigo() + ", persona: " + usuario.getNombre() + ", documento: " + usuario.getDocumento());
	}
	
	
	
	

}
