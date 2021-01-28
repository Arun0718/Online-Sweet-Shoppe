package com.cg.sweet.service.impl;

import java.util.Collection;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.sweet.model.Order;
import com.cg.sweet.model.Sweet;
import com.cg.sweet.repository.OrderRepository;
import com.cg.sweet.repository.SweetRepository;
import com.cg.sweet.services.OrderService;
import com.cg.sweet.services.SweetService;



@Service
public class OrderServiceImpl implements OrderService<Order> {
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public Collection<Order> findAll() {
		return orderRepository.findAll();
	}

	@Override
	public Order findById(Long id) {
		return orderRepository.findById(id).get();
	}

	@Override
	public Order saveOrUpdate(Order order) {
		return orderRepository.saveAndFlush(order);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			orderRepository.deleteById(id);
			jsonObject.put("message", "Book deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

}
