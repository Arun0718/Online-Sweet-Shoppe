package com.cg.sweet.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "admin")
public class Admin {

	@Id
	@Column(nullable = false, length = 45)

	@Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$", message = "email Id must be valid")

	public String email;

	@Column(nullable = false, length = 50)
	private String password;

	@Column(nullable = false, length = 50)
	private String confirmPassword;

	@Column(nullable = false, length = 45)
	private String adminName;

	@Column(nullable = false, length = 10)

	@Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile number must be 10 digits")

	private String phoneNo;

	@Column(nullable = false, length = 150)
	private String address;

	public Admin() {
		super();
	}

	public Admin(
			@Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$", message = "email Id must be valid") String email,
			String password, String confirmPassword, String adminName,
			@Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile number must be 10 digits") String phoneNo,
			String address) {
		super();
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.adminName = adminName;
		this.phoneNo = phoneNo;
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	
}
