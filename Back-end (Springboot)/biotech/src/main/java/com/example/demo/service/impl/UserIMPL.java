package com.example.demo.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.LoginResponse;
import com.example.demo.service.UserService;

@Service
public class UserIMPL implements UserService{
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public String addUser(UserDTO userDTO) {
		Optional<User> user = repo.findOneByUsername(userDTO.getUsername());
		if(!user.isPresent()) {
			User newUser = new User(userDTO.getId(),userDTO.getUsername(),this.passwordEncoder.encode(userDTO.getPassword()));
			repo.save(newUser);
			return newUser.getUsername();
		}
		else {
			return "This username is already taken!";
		}
		
	}

	@Override
	public LoginResponse loginUser(LoginDTO loginDTO) {
		User origin = repo.findByUsername(loginDTO.getUsername());
		
		if(origin != null) {
			String password = loginDTO.getPassword();
			String encodedPassword = origin.getPassword();
			
			Boolean isMatch = passwordEncoder.matches(password, encodedPassword);
			if(isMatch) {
				Optional<User> user = repo.findOneByUsernameAndPassword(loginDTO.getUsername(),encodedPassword);
				if(user.isPresent()) {
					return new LoginResponse("Login Success",true);
				}
				else {
					return new LoginResponse("Login Failed",false);
				}
			}
			else {
				return new LoginResponse("Incorrect Password",false);
			}
		}
		else {
			return new LoginResponse("Invalid Username",false);
		}
	}

}
