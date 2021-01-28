package com.cg.sweet.services;

import java.util.Collection;

public interface FeedbackService<T> {
	Collection<T> findAll();
	
	T findById(Long id);
	
	T saveOrUpdate(T t);
	
	String deleteById(Long id);
}