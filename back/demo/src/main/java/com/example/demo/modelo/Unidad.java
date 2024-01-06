package com.example.demo.modelo;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ColumnTransformer;

import com.example.demo.exceptions.UnidadException;
import com.example.demo.views.EdificioView;
import com.example.demo.views.UnidadView;

import jakarta.persistence.*;

@Entity
@Table(name="unidades")
public class Unidad {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="identificador")
	private int id;
	
	@Basic
	private String piso;
	
	@Basic
	private String numero;
	
	@Basic
	@ColumnTransformer(
		    read = "CASE WHEN habitado = 'S' THEN true ELSE false END",
		    write = "CASE WHEN ? = true THEN 'S' ELSE 'N' END"
		)
	private boolean habitado;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name="codigoedificio")
	private Edificio edificio;
	
	@ManyToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinTable(name="duenios", joinColumns = @JoinColumn(name="identificador"), inverseJoinColumns= @JoinColumn(name="documento"))
	private List<Persona> duenios;
	
	@ManyToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinTable(name="inquilinos",joinColumns = @JoinColumn(name="identificador"), inverseJoinColumns= @JoinColumn(name="documento"))
	private List<Persona> inquilinos;
	
	public Unidad() {}
	
	public Unidad(String piso, String numero, Edificio edificio) {
		this.piso = piso;
		this.numero = numero;
		this.habitado = false;
		this.edificio = edificio;
		this.duenios = new ArrayList<Persona>();
		this.inquilinos = new ArrayList<Persona>();
	}
	

	public void transferir(Persona nuevoDuenio) {
		duenios = new ArrayList<Persona>();
		duenios.add(nuevoDuenio);
	}
	
	public void agregarDuenio(Persona duenio) {
		duenios.add(duenio);
	}
	
	public void alquilar(Persona inquilino) throws UnidadException {
		if(!this.habitado) {
			this.habitado = true;
			System.out.println("sada");
			inquilinos = new ArrayList<Persona>();
			inquilinos.add(inquilino);
		}
		else {
			System.out.println("error");
			throw new UnidadException("La unidad esta ocupada");}
	}

	public void agregarInquilino(Persona inquilino) {
		inquilinos.add(inquilino);
	}
	
	public boolean estaHabitado() {
		return this.habitado;
	}
	
	public void liberar() {
		this.inquilinos = new ArrayList<Persona>();
		this.habitado = false;
	}
	
	public void habitar() throws UnidadException {
		if(this.habitado)
			throw new UnidadException("La unidad ya esta habitada");
		else
			this.habitado = true;
	}
	
	public int getId() {
		return id;
	}

	public String getPiso() {
		return piso;
	}

	public String getNumero() {
		return numero;
	}

	
	public Edificio getEdificio() {
		return edificio;
	}

	public List<Persona> getDuenios() {
		return duenios;
	}

	public List<Persona> getInquilinos() {
		return inquilinos;
	}

	public UnidadView toView() {
		EdificioView auxEdificio = edificio.toView();
		return new UnidadView(id, piso, numero, habitado, auxEdificio);
	}

}
