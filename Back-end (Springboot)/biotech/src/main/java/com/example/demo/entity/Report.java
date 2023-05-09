package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Report {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String refno;
	private String link;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRef_no() {
		return refno;
	}
	public void setRef_no(String ref_no) {
		this.refno = ref_no;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public Report(long id, String ref_no, String link) {
		super();
		this.id = id;
		this.refno = ref_no;
		this.link = link;
	}
	public Report() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Report [id=" + id + ", ref_no=" + refno + ", link=" + link + "]";
	}
	
	
}
