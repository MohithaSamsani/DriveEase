package DriveEase.Backend.controller;

import DriveEase.Backend.model.Rental;
import DriveEase.Backend.repository.RentalRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rentals")
@CrossOrigin
public class RentalController {

    private final RentalRepository rentalRepository;

    public RentalController(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }

    @GetMapping
    public List<Rental> getAllRentals() {
        return rentalRepository.findAll();
    }

    @GetMapping("/{id}")
    public Rental getRentalById(@PathVariable Long id) {
        return rentalRepository.findById(id).orElse(null);
    }

    @PostMapping
public Rental createRental(@RequestBody Rental rental) {

    if (rental.getCar() == null) {
        throw new RuntimeException("Car is required");
    }

    if (!rental.getCar().isAvailable()) {
        throw new RuntimeException("Car is not available");
    }

    return rentalRepository.save(rental);
}

    @DeleteMapping("/{id}")
    public void deleteRental(@PathVariable Long id) {
        rentalRepository.deleteById(id);
    }
    @PutMapping("/{id}")
public Rental updateRental(@PathVariable Long id, @RequestBody Rental rental) {
    Rental existingRental = rentalRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Rental not found"));

    existingRental.setStartDate(rental.getStartDate());
    existingRental.setEndDate(rental.getEndDate());
    existingRental.setStatus(rental.getStatus());
    existingRental.setTotalAmount(rental.getTotalAmount());

    return rentalRepository.save(existingRental);
}
}