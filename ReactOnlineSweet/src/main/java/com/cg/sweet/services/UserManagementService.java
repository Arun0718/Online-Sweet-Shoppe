package com.cg.sweet.services;

import com.cg.sweet.model.Login;
import com.cg.sweet.model.User;

/**
 * UserManagementService class
 * This class will handle tasks specific to all users
 * @author 15BW089AX
 *
 */
public interface UserManagementService {

	public void registerUser(User user) ;
	
	public void changePassword(int userId, User user);
	
	public String login(Login login);
	
	public void logout(String email);
}
