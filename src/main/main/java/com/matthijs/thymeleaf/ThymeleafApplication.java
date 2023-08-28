package com.matthijs.thymeleaf;

import com.matthijs.thymeleaf.controller.Tuin;
import com.matthijs.thymeleaf.repository.TuinRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ThymeleafApplication implements CommandLineRunner {

	@Autowired
	TuinRepo tuinRepo;

	public static void main(String[] args) {
		SpringApplication.run(ThymeleafApplication.class, args);
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
