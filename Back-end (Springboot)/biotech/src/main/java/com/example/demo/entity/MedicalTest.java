package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MedicalTest {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String test_name;
	private String specimen;
	private int fee;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTest_name() {
		return test_name;
	}
	public void setTest_name(String test_name) {
		this.test_name = test_name;
	}
	public String getSpecimen() {
		return specimen;
	}
	public void setSpecimen(String specimen) {
		this.specimen = specimen;
	}
	public int getFee() {
		return fee;
	}
	public void setFee(int fee) {
		this.fee = fee;
	}
	public MedicalTest(long id, String test_name, String specimen, int fee) {
		super();
		this.id = id;
		this.test_name = test_name;
		this.specimen = specimen;
		this.fee = fee;
	}
	public MedicalTest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
