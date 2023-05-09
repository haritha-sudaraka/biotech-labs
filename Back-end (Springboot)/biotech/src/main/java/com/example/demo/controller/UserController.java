package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.response.LoginResponse;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/loginapi")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/newUser")
	public String saveUser(@RequestBody UserDTO userDTO) {
		return userService.addUser(userDTO);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
		LoginResponse loginMsg = userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginMsg);
	}
}
