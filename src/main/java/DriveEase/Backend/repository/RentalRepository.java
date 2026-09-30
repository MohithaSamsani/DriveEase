package DriveEase.Backend.repository;

import DriveEase.Backend.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<Rental, Long> {

}