package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Edificio;


public interface EdificioRepository extends JpaRepository<Edificio, Integer> {

}