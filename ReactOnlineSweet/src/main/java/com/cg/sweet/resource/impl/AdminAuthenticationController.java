package com.cg.sweet.resource.impl;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.sweet.model.Admin;
import com.cg.sweet.services.AdminAuthenticationService;
import com.cg.sweetShoppe.exception.AdminExistException;
import com.cg.sweetShoppe.exception.AdminNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1")
public class AdminAuthenticationController {
	private static final Logger logger = LogManager.getLogger(AdminAuthenticationController.class);
	@Autowired
	private AdminAuthenticationService adminAuthenticationService;

	@PostMapping("/createAdmin")
	public Admin createAdmin(@Valid @RequestBody Admin admin)
			throws AdminExistException {
		logger.info("in Admin Authentication Controller");
		boolean ifExist = adminAuthenticationService.getAdmin(admin.getEmail()).isPresent();
		if (ifExist) {
			throw new AdminExistException("admin already present with this:" + admin.getEmail());
		}
		return adminAuthenticationService.createAdmin(admin);
	}

	@GetMapping("getAdmin/{email:.+}")
	public ResponseEntity<Admin> getAdmin(@PathVariable(value = "email") String email)
			throws AdminNotFoundException {
		logger.info("in getAdmin");
		Admin admin = adminAuthenticationService.getAdmin(email)
				.orElseThrow(() -> new AdminNotFoundException("No Admin found with this Id :" + email));

		return ResponseEntity.ok().body(admin);

	}

	@PutMapping("/updateAdmin/{email:.+}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable(value = "email") String email,
			@RequestBody Admin admin) throws AdminNotFoundException {
		logger.info("in updateEmail");
		Admin adminAuthentication1 = adminAuthenticationService.getAdmin(email)
				.orElseThrow(() -> new AdminNotFoundException("No Admin found with this Email_Id:" + email));
		adminAuthentication1.setAddress(admin.getAddress());
		adminAuthentication1.setConfirmPassword(admin.getConfirmPassword());
		adminAuthentication1.setPassword(admin.getPassword());
		adminAuthentication1.setPhoneNo(admin.getPhoneNo());
		adminAuthentication1.setAdminName(admin.getAdminName());
		Admin updatedAdmin = adminAuthenticationService.updateAdmin(adminAuthentication1);

		return ResponseEntity.ok(updatedAdmin);

	}

	@DeleteMapping("/deleteAdmin/{email:.+}")
	public String deleteAdmin(@PathVariable(value = "email") String email) throws AdminNotFoundException {
		logger.info("in deleteAdmin");
		Admin admin = adminAuthenticationService.getAdmin(email)
				.orElseThrow(() -> new AdminNotFoundException("No Admin found with this Email_Id:" + email));
		adminAuthenticationService.deleteAdmin(admin);
		return "Admin Deleted Successfully";
	}
	
	// #############Admin Login###############

	@GetMapping("/loginAdmin/{email:.+}/{password}")
	public ResponseEntity<String> adminLogin(@PathVariable(value = "email") String email,

			@PathVariable(value = "password") String password) throws AdminExistException {
		logger.info("in admin Login");
		Admin admin = adminAuthenticationService.findByAdminEmailAndPassword(email,
				password);

		if (admin == null) {
			throw new AdminExistException("No Admin found with this Email_Id: " + email + " and Password: " + password);
		}

		return ResponseEntity.ok().body("Login Successful");
	}

}
