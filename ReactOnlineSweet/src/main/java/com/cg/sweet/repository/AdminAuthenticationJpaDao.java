package com.cg.sweet.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.sweet.model.Admin;




@Repository
public interface AdminAuthenticationJpaDao extends JpaRepository<Admin, String> {

	Optional<Admin> findById(String email);

	Admin findByEmailAndPassword(String email, String password);
	
	
}
