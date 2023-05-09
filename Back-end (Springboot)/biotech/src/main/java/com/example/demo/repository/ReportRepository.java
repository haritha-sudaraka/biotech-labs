package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Report;

public interface ReportRepository extends JpaRepository<Report,Long>{
	List<Report> findByRefno(String refno);
}
