package com.cg.sweet.resource.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.sweet.model.Feedback;
import com.cg.sweet.model.Sweet;
import com.cg.sweet.resources.FeedbackResource;
import com.cg.sweet.resources.SweetResource;
import com.cg.sweet.services.FeedbackService;
import com.cg.sweet.services.SweetService;



@RestController
@RequestMapping("/feedbacks")
@CrossOrigin(origins="http://localhost:3002")
public class FeedbackResourceImpl implements FeedbackResource<Feedback> {
	
	@Autowired
	private FeedbackService<Feedback> feedbackService;

	@Override
	public ResponseEntity<Collection<Feedback>> findAll() {
		return new ResponseEntity<>(feedbackService.findAll(), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Feedback> findById(Long id) {
		return new ResponseEntity<>(feedbackService.findById(id), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Feedback> save(Feedback feedback) {
		return new ResponseEntity<>(feedbackService.saveOrUpdate(feedback), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Feedback> update(Feedback feedback) {
		return new ResponseEntity<>(feedbackService.saveOrUpdate(feedback), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(Long id) {
		return new ResponseEntity<>(feedbackService.deleteById(id), HttpStatus.OK);
	}


}
