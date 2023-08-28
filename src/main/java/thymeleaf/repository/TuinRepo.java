package thymeleaf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import thymeleaf.controller.Tuin;

@Repository
public interface TuinRepo extends JpaRepository<Tuin, Integer> {
}
