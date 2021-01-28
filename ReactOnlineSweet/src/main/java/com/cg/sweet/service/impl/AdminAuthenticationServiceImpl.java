package com.cg.sweet.service.impl;

import java.util.Optional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.sweet.model.Admin;
import com.cg.sweet.repository.AdminAuthenticationJpaDao;
import com.cg.sweet.resource.impl.AdminAuthenticationController;
import com.cg.sweet.services.AdminAuthenticationService;



@Service
@Transactional
public class AdminAuthenticationServiceImpl implements AdminAuthenticationService {
	
	private static final Logger logger = LogManager.getLogger(AdminAuthenticationController.class);
	@Autowired
	private AdminAuthenticationJpaDao adminAuthenticationJpaDao;

	@Override
	public Admin createAdmin(Admin admin) {
		logger.info("in Admin Authentication Service createAdmin");
		return adminAuthenticationJpaDao.save(admin);
	}

	@Override
	public Optional<Admin> getAdmin(String email) {
		logger.info("in Admin Authentication Service getAdminById");
		return adminAuthenticationJpaDao.findById(email);

	}

	@Override
	public Admin findByAdminEmailAndPassword(String email, String password) {
		logger.info("in AdminAuthentication service findByAdminEmailAndPassword");
		return adminAuthenticationJpaDao.findByEmailAndPassword(email, password);
	}

	@Override
	public Admin updateAdmin(Admin adminAuthentication1) {
		logger.info("in AdminAuthentication service updateAdmin");
		return adminAuthenticationJpaDao.save(adminAuthentication1);
	}

	@Override
	public Admin deleteAdmin(Admin admin) {
		logger.info("in AdminAuthentication service deleteAdmin");
		 adminAuthenticationJpaDao.delete(admin);
		 return admin;
	}

	

}
