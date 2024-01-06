package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Unidad;

public interface UnidadRepository extends JpaRepository<Unidad, Integer> {
	
	public Optional<Unidad> findByEdificioAndPisoAndNumero(Edificio edificio, String piso, String numero);
	public List<Unidad> findByEdificio(Edificio edificio);
	
	@Query("SELECT u FROM Unidad u " +
		       "JOIN u.inquilinos i " +
		       "JOIN u.duenios d " +
		       "WHERE i.documento = :documento OR d.documento = :documento")
    List<Unidad> findByDocumento(@Param("documento") String documento);
	
}
