package com.cg.sweet.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "sweet1")
public class Sweet {
	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sweet_id")
    private Long id;
    @Column(name = "category_name")
    private String categoryName;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "rate")
    private double rate;
    @Column(name ="offer_name")
    private String offerName;
    @Column(name="offer_Rate")
    private double offerRate;
    @Column(name="image")
    private String image;



	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getOfferName() {
		return offerName;
	}


	public void setOfferName(String offerName) {
		this.offerName = offerName;
	}


	public double getOfferRate() {
		return offerRate;
	}


	public void setOfferRate(double offerRate) {
		this.offerRate = offerRate;
	}




	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getCategoryName() {
		return categoryName;
	}


	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public double getRate() {
		return rate;
	}


	public void setRate(double rate) {
		this.rate = rate;
	}

}

