package com.cg.sweet.services;

import java.util.Optional;

import com.cg.sweet.model.Admin;


public interface AdminAuthenticationService {

	public Admin createAdmin(Admin admin);

	public Optional<Admin> getAdmin(String email);

	public Admin findByAdminEmailAndPassword(String email, String password);

	public Admin updateAdmin(Admin adminAuthentication1);

	public Admin deleteAdmin(Admin admin);
	

}
