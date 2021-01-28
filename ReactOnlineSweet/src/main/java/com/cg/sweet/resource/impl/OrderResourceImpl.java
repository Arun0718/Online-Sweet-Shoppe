package com.cg.sweet.resource.impl;

import java.util.Arrays;
import java.util.Collection;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.sweet.model.Order;

import com.cg.sweet.resources.OrderResource;

import com.cg.sweet.services.OrderService;


@RestController
@RequestMapping("/orders")
@CrossOrigin(origins="http://localhost:3002")
public class OrderResourceImpl implements OrderResource<Order> {
	
	@Autowired
	private OrderService<Order> orderService;

	@Override
	public ResponseEntity<Collection<Order>> findAll() {
		return new ResponseEntity<>(orderService.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Order> findById(Long id) {
		return new ResponseEntity<>(orderService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Order> save(Order order) {
		return new ResponseEntity<>(orderService.saveOrUpdate(order), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Order> update(Order order) {
		return new ResponseEntity<>(orderService.saveOrUpdate(order), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(Long id) {
		return new ResponseEntity<>(orderService.deleteById(id), HttpStatus.OK);
	}
	
	

}
