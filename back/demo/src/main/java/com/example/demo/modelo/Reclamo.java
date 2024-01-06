package com.example.demo.modelo;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.views.EdificioView;
import com.example.demo.views.Estado;
import com.example.demo.views.PersonaView;
import com.example.demo.views.ReclamoView;
import com.example.demo.views.UnidadView;

import jakarta.persistence.*;

@Entity
@Table(name="reclamos")
public class Reclamo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idreclamo")
	private int numero;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="documento")
	private Persona usuario;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="codigo")
	private Edificio edificio;
	
	@Basic
	private String ubicacion;
	
	@Basic
	@Column(length =1000)
	private String descripcion;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="identificador")
	private Unidad unidad;

	@Column(name="estado")
	@Enumerated(EnumType.STRING)
	private Estado estado;

	@OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy = "reclamo")
	private List<Imagen> imagenes;

	public Reclamo(Persona usuario, Edificio edificio, String ubicacion, String descripcion, Unidad unidad) {
		this.usuario = usuario;
		this.edificio = edificio;
		this.ubicacion = ubicacion;
		this.descripcion = descripcion;
		this.unidad = unidad;
		this.estado = Estado.nuevo;
		imagenes = new ArrayList<Imagen>();
	}

	public Reclamo(){}


	public void agregarImagen(String direccion, String tipo) {
		Imagen imagen = new Imagen(direccion, tipo);
		imagenes.add(imagen);
		imagen.setReclamo(this);
	}
	
	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public Persona getUsuario() {
		return usuario;
	}

	public Edificio getEdificio() {
		return edificio;
	}

	public String getUbicacion() {
		return ubicacion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public Unidad getUnidad() {
		return unidad;
	}

	public Estado getEstado() {
		return estado;
	}
	
	public List<Imagen> getImagenes(){
		return this.imagenes;
	}
	
	public void cambiarEstado(Estado estado) {
		this.estado = estado;
	}

	public void setUsuario(Persona usuario) {
		this.usuario = usuario;
	}

	public void setEdificio(Edificio edificio) {
		this.edificio = edificio;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public void setUnidad(Unidad unidad) {
		this.unidad = unidad;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public void setImagenes(List<Imagen> imagenes) {
		this.imagenes = imagenes;
	}
	
	public ReclamoView toView() {
		return new ReclamoView(numero,usuario,edificio,descripcion,unidad, estado,ubicacion);
	}

	@Override
	public String toString() {
		return "Reclamo [numero=" + numero + ", usuario=" + usuario + ", edificio=" + edificio + ", ubicacion="
				+ ubicacion + ", descripcion=" + descripcion + ", unidad=" + unidad + ", estado=" + estado
				+ ", imagenes=" + imagenes + "]";
	}
	
	
	

}
