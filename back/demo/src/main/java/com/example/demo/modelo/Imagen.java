package com.example.demo.modelo;

import com.example.demo.views.ImagenView;

import jakarta.persistence.*;
@Entity
@Table(name="imagenes")
public class Imagen {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic
	private int numero;
	
	@Column(name="path")
	private String direccion;
	
	@Basic
	private String tipo;
	
	@ManyToOne
	@JoinColumn(name="idreclamo")
	private Reclamo reclamo;
	
	public Imagen(String direccion, String tipo) {
		this.direccion = direccion;
		this.tipo = tipo;
	}
	
	public Imagen() {}

	public int getNumero() {
		return numero;
	}
	
	public ImagenView toView() {
		return new ImagenView(numero,direccion,tipo);
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	

	public Reclamo getReclamo() {
		return reclamo;
	}

	public void setReclamo(Reclamo reclamo) {
		this.reclamo = reclamo;
	}

	@Override
	public String toString() {
		return "Imagen [numero=" + numero + ", direccion=" + direccion + ", tipo=" + tipo + "]";
	}
	
	
	
	
	
}
