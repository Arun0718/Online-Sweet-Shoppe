package com.cg.sweet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cg.sweet.model.Order;
import com.cg.sweet.model.Sweet;

import com.cg.sweet.services.OrderService;
import com.cg.sweet.services.SweetService;

@SpringBootApplication
public class ReactOnlineSweetApplication implements CommandLineRunner{
	
	
	


	public static void main(String[] args) {
		SpringApplication.run(ReactOnlineSweetApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	}

}
