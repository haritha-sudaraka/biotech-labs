package com.example.demo.entity;
import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Appointment {
	@Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
        strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Patient patient_id;
	private String service_type;
	private String date;
	private String time;
	private String remarks;
	private String status;
	
	public UUID getId() {
		return id;
	}
	public void setId(UUID id) {
		this.id = id;
	}
	public Patient getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(Patient patient_id) {
		this.patient_id = patient_id;
	}
	public String getService_type() {
		return service_type;
	}
	public void setService_type(String service_type) {
		this.service_type = service_type;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Appointment(UUID id, Patient patient_id, String service_type, String date, String time, String remarks,
			String status) {
		super();
		this.id = id;
		this.patient_id = patient_id;
		this.service_type = service_type;
		this.date = date;
		this.time = time;
		this.remarks = remarks;
		this.status = status;
	}
	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Appointment [id=" + id + ", patient_id=" + patient_id + ", service_type=" + service_type + ", date="
				+ date + ", time=" + time + ", remarks=" + remarks + ", status=" + status + "]";
	}
	
	
	
	
}
