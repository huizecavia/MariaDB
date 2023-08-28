package com.matthijs.spring.mariadb;

import com.matthijs.spring.mariadb.controller.Tuin;
import com.matthijs.spring.mariadb.repository.TuinRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TuinApplication implements CommandLineRunner {

	@Autowired
	TuinRepo tuinRepo;

	public static void main(String[] args) {
		SpringApplication.run(TuinApplication.class, args);
	}

	@Override
	public void run(String[] args) {
		var tuinen = tuinRepo.findAll();

		for (Tuin tuin: tuinen) {
			System.out.println(tuin.getPlant());
			System.out.println(tuin.getOnderhoud());
		}
	}
}
