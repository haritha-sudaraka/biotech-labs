package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.MedicalTest;
import com.example.demo.repository.MedicalTestRepository;

@RestController
@CrossOrigin
public class MedicalTestController {
	@Autowired
	private MedicalTestRepository repo;
	
	//add medical test
	@PostMapping("/newMedicalTest")
	public MedicalTest addAppointment(@RequestBody MedicalTest mt) {
		return repo.save(mt);
	}
			
	//find all
	@GetMapping("/getAllMedicalTests")
	public List<MedicalTest> getAllAppointments(){
		return repo.findAll();
	}
			
	//total medical tests
	@GetMapping("/totalMedicalTests")
	public long appointmentCount() {
		return repo.count();
	}
}
