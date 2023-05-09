package com.example.demo.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository <User,Long>{
	Optional<User> findOneByUsernameAndPassword(String username, String password);
	Optional<User> findOneByUsername(String username);
	User findByUsername(String username);
	
}
