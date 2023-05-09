package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.MedicalTest;

public interface MedicalTestRepository extends JpaRepository<MedicalTest,Long>{

}
