package com.cg.sweet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.sweet.model.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

}
