package com.app_register.app.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app_register.app.domain.UserEntity;
import com.app_register.app.repositories.UserRepository;

@Service
public class UserService {

	private final UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	/**
	 * This method retrieves a list of all registered users in the system.
	 * 
	 * @return List of UserEntity representing registered users.
	 * 
	 *         Created on 15/09/2023 at 10:53:36 p. m.
	 * 
	 * @author Jhon Vasquez
	 */
	public List<UserEntity> getAllUsers() {
		return userRepository.findAll();
	}

	/**
	 * This method adds a new user to the system.
	 * 
	 * @param newUser The user to be added.
	 * @return The user entity representing the newly created user.
	 * 
	 *         Created on 15/09/2023 at 10:54:06 p. m.
	 * 
	 * @author Jhon Vasquez
	 */
	public UserEntity addUser(UserEntity newUser) {
		return userRepository.save(newUser);
	}

	/**
	 * This service method is used to delete a user from the system by their user
	 * ID.
	 * 
	 * @param userId The ID of the user to delete.
	 * 
	 *               Created on 15/09/2023 at 11:08:37 p. m.
	 * 
	 * @author Jhon Vasquez
	 */
	public void deleteUserById(Long userId) {
		userRepository.deleteById(userId);
	}

	/**
	 * This service method is used to update an existing user's information in the
	 * system by their user ID.
	 * 
	 * @param userId      The ID of the user to update.
	 * @param updatedUser The updated user information.
	 * @return The updated user entity.
	 * @throws EntityNotFoundException If the user with the specified ID is not found.
	 * 
	 *                                 Created on 15/09/2023 at 11:13:17 p. m.
	 * 
	 * @author Jhon Vasquez
	 */
	public UserEntity updateUser(Long userId, UserEntity updatedUser) {
		Optional<UserEntity> optionalUser = userRepository.findById(userId);
		if (optionalUser.isPresent()) {
			UserEntity existingUser = optionalUser.get();

			existingUser.setUserName(updatedUser.getUserName());

			return userRepository.save(existingUser);
		} else {
			throw new EntityNotFoundException("User not found with ID: " + userId);
		}
	}

	/**
	 * This service method retrieves a user's information from the system by their
	 * user ID and returns it as an optional.
	 * 
	 * @param userId The ID of the user to retrieve.
	 * @return An optional containing the user entity, or empty if not found.
	 * 
	 *         Created on 15/09/2023 at 11:31:38 p. m.
	 * 
	 * @author Jhon Vasquez
	 */
	public Optional<UserEntity> findUserById(Long userId) {
		return userRepository.findById(userId);
	}
}