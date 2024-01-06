package com.example.demo.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Reclamo;
import com.example.demo.modelo.Unidad;

public interface ReclamoRepository extends JpaRepository<Reclamo, Integer>{
	public List<Reclamo> findByEdificio(Edificio edificio);
	public List<Reclamo> findByUnidad(Unidad unidad);
	public List<Reclamo> findByUsuario(Persona persona);
}
