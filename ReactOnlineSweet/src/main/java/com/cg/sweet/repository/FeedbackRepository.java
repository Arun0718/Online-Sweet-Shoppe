package com.cg.sweet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.sweet.model.Feedback;



public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}
