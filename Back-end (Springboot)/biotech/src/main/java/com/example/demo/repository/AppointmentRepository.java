package com.example.demo.repository;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment,UUID>{
	long countByStatus(String status);
}
