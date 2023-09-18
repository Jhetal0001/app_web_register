package com.app_register.app.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app_register.app.domain.UserEntity;
import com.app_register.app.repositories.UserRepository;

public class UserServiceTest {

	@InjectMocks
	private UserService userService;

	@Mock
	private UserRepository userRepository;

	@SuppressWarnings("deprecation")
	@BeforeEach
	public void setUp() {
		MockitoAnnotations.initMocks(this);
	}

	/**
	 * Unit test for the addUser method of the UserService.
	 */
	@Test
	public void testAddUser() {
		// Create a test user
		UserEntity newUser = new UserEntity();
		newUser.setUserName("jhetal01");
		newUser.setPassword("Jhetal00");
		// Add more attributes as needed

		// Simulate the repository behavior when saving a user
		when(userRepository.save(newUser)).thenReturn(newUser);

		// Call the service to add the user
		UserEntity savedUser = userService.addUser(newUser);

		// Verify that the user was saved successfully
		assertEquals(newUser.getUserName(), savedUser.getUserName());
		// Add more assertions as needed
	}

	/**
	 * Unit test for the updateUser method of the UserService.
	 */
	@Test
	public void testUpdateUser() {
		// Create a test existing user
		UserEntity existingUser = new UserEntity();
		existingUser.setId(1L);
		existingUser.setUserName("jhetal01");
		existingUser.setPassword("jhetal00");
		existingUser.setEmail("jhetal00@gmail.com");

		// Simulate the repository behavior when finding a user by ID
		when(userRepository.findById(existingUser.getId())).thenReturn(Optional.of(existingUser));

		// Create an updated user
		UserEntity updatedUser = new UserEntity();
		updatedUser.setUserName("jhetal01");

		 // Simulate the repository behavior when saving the user
	    when(userRepository.save(any(UserEntity.class))).thenAnswer(invocation -> {
	        UserEntity savedEntity = invocation.getArgument(0);

	        assertEquals(updatedUser.getUserName(), savedEntity.getUserName());

	        return savedEntity;
	    });
		
		// Call the service to update the user
		UserEntity updatedEntity = userService.updateUser(existingUser.getId(), updatedUser);

		// Verify that the user was updated successfully
		assertEquals(existingUser.getUserName(), updatedEntity.getUserName());
		// Add more assertions as needed
	}

	/**
	 * Unit test for the deleteUserById method of the UserService.
	 */
	@Test
	public void testDeleteUserById() {
		// User ID to delete
		Long userId = 1L;

		// Simulate the repository behavior when deleting a user by ID
		doNothing().when(userRepository).deleteById(userId);

		// Call the service to delete the user
		userService.deleteUserById(userId);

		// Verify that the repository method was called once to delete the user
		verify(userRepository, times(1)).deleteById(userId);
	}

	/**
	 * Unit test for the findUserById method of the UserService.
	 */
	@Test
	public void testFindUserById() {
		// User ID to find
		Long userId = 1L;

		// Create a test user
		UserEntity user = new UserEntity();
		user.setId(userId);
		user.setUserName("jhetal01");

		// Simulate the repository behavior when finding a user by ID
		when(userRepository.findById(userId)).thenReturn(Optional.of(user));

		// Call the service to find the user by ID
		Optional<UserEntity> foundUser = userService.findUserById(userId);

		// Verify that the user was found and their ID matches
		assertTrue(foundUser.isPresent());
		assertEquals(userId, foundUser.get().getId());
		// Add more assertions as needed
	}
}
