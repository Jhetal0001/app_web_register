package com.app_register.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app_register.app.domain.UserEntity;
import com.app_register.app.services.UserService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
public class UserController {

	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/getAllUsers")
	@Operation(summary = "This method retrieves a list of all registered users in the system.")
	public List<UserEntity> getAllUsers() {
		return userService.getAllUsers();
	}

	@PostMapping("/addUser")
	@Operation(summary = "This method adds a new user to the system.")
	public UserEntity addUser(@RequestBody UserEntity newUser) {
		return userService.addUser(newUser);
	}

	@DeleteMapping("/deleteUser/{userId}")
	@Operation(summary = "This service method is used to delete a user from the system by their user ID.")
	public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
		userService.deleteUserById(userId);
		return ResponseEntity.ok("User deleted successfully");
	}

	@PutMapping("/updateUser/{userId}")
	@Operation(summary = "This service method is used to update an existing user's information in the system by their user ID.")
	public ResponseEntity<UserEntity> updateUser(@PathVariable Long userId, @RequestBody UserEntity updatedUser) {
		UserEntity updatedEntity = userService.updateUser(userId, updatedUser);
		return ResponseEntity.ok(updatedEntity);
	}

	@GetMapping("/getUser/{userId}")
	@Operation(summary = "This endpoint allows retrieving a user's information from the system by their user ID.")
	public ResponseEntity<UserEntity> getUserById(@PathVariable Long userId) {
		Optional<UserEntity> user = userService.findUserById(userId);
		if (user.isPresent()) {
			return ResponseEntity.ok(user.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}