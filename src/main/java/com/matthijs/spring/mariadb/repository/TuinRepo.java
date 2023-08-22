package com.matthijs.spring.mariadb.repository;

import com.matthijs.spring.mariadb.controller.Tuin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuinRepo extends JpaRepository<Tuin, Integer> {
}
