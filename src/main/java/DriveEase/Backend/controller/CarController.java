package DriveEase.Backend.controller;

import DriveEase.Backend.model.Car;
import DriveEase.Backend.repository.CarRepository;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/cars")
public class CarController {

    private final CarRepository carRepository;

    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @GetMapping
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @PostMapping
    public Car addCar(@RequestBody Car car) {
        return carRepository.save(car);
    }
    @PutMapping("/{id}/availability")
public Car updateAvailability(
        @PathVariable Long id,
        @RequestParam boolean available) {

    Car car = carRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Car not found"));

    car.setAvailable(available);

    return carRepository.save(car);
}
@GetMapping("/{id}")
public Car getCarById(@PathVariable Long id) {

    return carRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Car not found"));
}
@DeleteMapping("/{id}")
public String deleteCar(@PathVariable Long id) {

    if (!carRepository.existsById(id)) {
        return "Car not found";
    }

    carRepository.deleteById(id);

    return "Car deleted successfully";
}
}