package com.example.demo.modelo;

import org.hibernate.annotations.ColumnTransformer;

import com.example.demo.views.PersonaView;

import jakarta.persistence.*;

@Entity
@Table(name="personas")
public class Persona {
	
	@Id
	private String documento;
	
	@Basic
	private String nombre;
	
	@Basic
	private String mail;
	
	@Column(name="contrasenia")
	private String password;
	
	@Column(name="isadmin")
	private Boolean isAdmin;
	
	public Persona(String documento, String nombre, String mail, String password, boolean isAdmin) {
		this.documento = documento;
		this.nombre = nombre;
		this.mail = mail;
		this.password = password;
		this.isAdmin = isAdmin;
	}
	
	public Persona(){};

	public void cambiarPassword(String password) {
		this.password = password;
	}
	
	public String getDocumento() {
		return documento;
	}

	public String getNombre() {
		return nombre;
	}

	
	public String getMail() {
		return mail;
	}

	public String getPassword() {
		return password;
	}

	public PersonaView toView() {
		return new PersonaView(documento, nombre,mail, password,isAdmin);
	}

	@Override
	public String toString() {
		return "Persona [documento=" + documento + ", nombre=" + nombre + ", mail=" + mail + ", password=" + password
				+ ", isAdmin= " + isAdmin + " ]";

	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	
	
}
