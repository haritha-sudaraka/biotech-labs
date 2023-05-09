package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Report;
import com.example.demo.repository.ReportRepository;

@RestController
@CrossOrigin
public class ReportController {
	@Autowired
	private ReportRepository repo;
	
	//add report
	@PostMapping("/newReport")
	public Report addAppointment(@RequestBody Report rpt) {
		return repo.save(rpt);
	}
		
	//find all
	@GetMapping("/getAllReports")
	public List<Report> getAllAppointments(){
		return repo.findAll();
	}
	
	//find all
	@GetMapping("/getReportByRef/{refno}")
	public List<Report> getAllAppointments(@PathVariable String refno){
		return repo.findByRefno(refno);
	}
		
	//total reports
	@GetMapping("/totalReports")
	public long appointmentCount() {
		return repo.count();
	}
}
