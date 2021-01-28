package com.cg.sweet.service.impl;

import java.util.Collection;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.sweet.model.Feedback;
import com.cg.sweet.model.Sweet;
import com.cg.sweet.repository.FeedbackRepository;
import com.cg.sweet.repository.SweetRepository;
import com.cg.sweet.services.FeedbackService;
import com.cg.sweet.services.SweetService;



@Service
public class FeedbackServiceImpl implements FeedbackService<Feedback> {
	
	@Autowired
	private FeedbackRepository feedbackRepository;

	@Override
	public Collection<Feedback> findAll() {
		return feedbackRepository.findAll();
	}

	@Override
	public Feedback findById(Long id) {
		return feedbackRepository.findById(id).get();
	}

	@Override
	public Feedback saveOrUpdate(Feedback feedback) {
		return feedbackRepository.saveAndFlush(feedback);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			feedbackRepository.deleteById(id);
			jsonObject.put("message", "Book deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

}
