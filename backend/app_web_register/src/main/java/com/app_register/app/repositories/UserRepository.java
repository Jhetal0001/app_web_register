package com.app_register.app.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app_register.app.domain.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

	/**
	 * This repository method is used to delete a user from the system by their user
	 * ID.
	 * 
	 * @param userId The ID of the user to be deleted.
	 * 
	 *               Created on 15/09/2023 at 11:23:46 p. m.
	 * 
	 * @author Jhon Vasquez
	 */
	void deleteById(Long userId);

	/**
	 * This repository method is used to retrieve a user's information from the
	 * system by their user ID.
	 * 
	 * @param userId The ID of the user to be retrieved.
	 * @return The user with the specified ID.
	 * 
	 *         Created on 15/09/2023 at 11:24:17 p. m.
	 * 
	 * @author Jhon Vasquez
	 */
	Optional<UserEntity> findById(Long userId);

}