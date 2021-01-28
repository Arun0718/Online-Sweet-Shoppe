package com.cg.sweet.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.sweet.model.User;
import com.cg.sweet.repository.UserDAO;
import com.cg.sweet.services.UserService;





@Transactional
@Service
public class UserServiceImpl implements UserService{
	
	
	
	@Autowired
	UserDAO userDAO;
	
	
//	@Autowired
//	BookingDAO bookingDAO;

//	public Booking bookVehicle(Booking booking) 
//	{
//		LOGGER.info("Entered in UserService - (bookVehicle)");
//		Booking booking1 = bookingDAO.save(booking);
//		LOGGER.info("Done in UserService - (bookVehicle)");
//		return booking1;
//	}
	
	
	public User createUser(User user)
	{
		
		return userDAO.save(user);
	}
	
	
	public User findUserByEmail(String email)
	{
		
		User user = userDAO.findUserByEmail(email);
		
		return user;
	}
	public User findUserById(int id)
	{
		
		User user = userDAO.findById(id).get();
		
		return user;
	}

	
	
	/*
	 * findUserById()
	 * @return User instance
	 */
//	public User findUserById(int id)
//	{
//		LOGGER.info("Entered in UserService - (findUserByEmail)");
//		User user = userDAO.findById(id).get();
//		LOGGER.info("Done in UserService - (findUserByEmail)");
//		return user;
//	}
//	public Booking findBooking(int id)
//	{
//		LOGGER.info("Entered in UserService - (findBooking)");
//		Booking booking = bookingDAO.findByUserId(id);
//		LOGGER.info("Done in UserService - (findBooking)");
//		return booking;
//	}
}
