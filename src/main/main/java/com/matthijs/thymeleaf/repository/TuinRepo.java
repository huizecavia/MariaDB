package com.matthijs.thymeleaf.repository;

import com.matthijs.thymeleaf.controller.Tuin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuinRepo extends JpaRepository<Tuin, Integer> {
}
