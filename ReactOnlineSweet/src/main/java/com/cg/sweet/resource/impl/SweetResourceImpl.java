package com.cg.sweet.resource.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.sweet.model.Sweet;
import com.cg.sweet.resources.SweetResource;
import com.cg.sweet.services.SweetService;



@RestController
@RequestMapping("/sweets")
@CrossOrigin(origins="http://localhost:3002")
public class SweetResourceImpl implements SweetResource<Sweet> {
	
	@Autowired
	private SweetService<Sweet> sweetService;

	@Override
	public ResponseEntity<Collection<Sweet>> findAll() {
		return new ResponseEntity<>(sweetService.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Sweet> findById(Long id) {
		return new ResponseEntity<>(sweetService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Sweet> save(Sweet sweet) {
		return new ResponseEntity<>(sweetService.saveOrUpdate(sweet), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Sweet> update(Sweet sweet) {
		return new ResponseEntity<>(sweetService.saveOrUpdate(sweet), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(Long id) {
		return new ResponseEntity<>(sweetService.deleteById(id), HttpStatus.OK);
	}

}
