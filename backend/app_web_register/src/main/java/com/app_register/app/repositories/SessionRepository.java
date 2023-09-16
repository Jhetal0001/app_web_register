package com.app_register.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app_register.app.domain.SessionEntity;

@Repository
public interface SessionRepository extends JpaRepository<SessionEntity, Long> {
    
}
