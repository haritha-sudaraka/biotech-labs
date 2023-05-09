package com.example.demo.controller;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Appointment;
import com.example.demo.repository.AppointmentRepository;

@RestController
@CrossOrigin
public class AppointmentController {
	@Autowired
	private AppointmentRepository repo;
	
	//add appointment
	@PostMapping("/newAppointment")
	public Appointment addAppointment(@RequestBody Appointment apt) {
		return repo.save(apt);
	}
	
	//find all
	@GetMapping("/getAllAppointments")
	public List<Appointment> getAllAppointments(){
		return repo.findAll();
	}
	
	//find using id
	@GetMapping("/getAppointmentById/{id}")
	public Appointment getAppointmentById(@PathVariable UUID id) {
		return repo.findById(id).orElseThrow(()->new RuntimeException("Cannot find user with given ID"));
	}
	
	//total appointments
	@GetMapping("/totalAppointments/{status}")
	public long appointmentCount(@PathVariable String status) {
		return repo.countByStatus(status);
	}
	
	//update appointment
	@PutMapping("/updateAppointment")
	public Appointment updateAppointment(@RequestBody Appointment apt) {
		Appointment oldApt = repo.findById(apt.getId()).orElseThrow(()->new RuntimeException("Cannot find user with given ID"));
		oldApt.setStatus(apt.getStatus());
		return repo.save(oldApt);
	}
	
	//delete appointment
	@DeleteMapping("/deleteAppointment/{id}")
	public String deleteAppointment(@PathVariable UUID id) {
		repo.deleteById(id);
		return "Appointment Deleted";
	}
}
