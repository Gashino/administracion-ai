package com.example.demo.views;

public class PersonaView {
	
	private String documento;
	private String nombre;
	private String mail;
	private String contrasenia;
	private boolean isAdmin;
	
	public PersonaView() {}

	public PersonaView(String documento, String nombre, String mail, String contrasenia, boolean isAdmin) {
		this.documento = documento;
		this.nombre = nombre;
		this.mail= mail;
		this.contrasenia=contrasenia;
		this.isAdmin=isAdmin;
	}

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public boolean getIsAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public String toString() {
		return documento + " " + nombre + " " + mail + " " + contrasenia + " " +  isAdmin;
	}
	
}
