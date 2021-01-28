package com.cg.sweet.service.impl;

import java.util.Collection;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.sweet.model.Sweet;
import com.cg.sweet.repository.SweetRepository;
import com.cg.sweet.services.SweetService;



@Service
public class SweetServiceImpl implements SweetService<Sweet> {
	
	@Autowired
	private SweetRepository sweetRepository;

	@Override
	public Collection<Sweet> findAll() {
		return sweetRepository.findAll();
	}

	@Override
	public Sweet findById(Long id) {
		return sweetRepository.findById(id).get();
	}

	@Override
	public Sweet saveOrUpdate(Sweet sweet) {
		return sweetRepository.saveAndFlush(sweet);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			sweetRepository.deleteById(id);
			jsonObject.put("message", "Book deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

}