package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Persona;
public interface PersonaRepository extends JpaRepository<Persona, String>{
	
	public Optional<Persona> findByMailAndPassword(String mail, String contrasenia);
}
