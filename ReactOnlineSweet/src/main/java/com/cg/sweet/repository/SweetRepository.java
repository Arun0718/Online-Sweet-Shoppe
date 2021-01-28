package com.cg.sweet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.sweet.model.Sweet;


@Repository
public interface SweetRepository extends JpaRepository<Sweet, Long> {

}