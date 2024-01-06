package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Imagen;
import com.example.demo.modelo.Reclamo;
import com.example.demo.modelo.Unidad;

public interface ImagenRepository extends JpaRepository<Imagen, Integer> {
	
	public List<Imagen> findByReclamo(Reclamo reclamo);

}
