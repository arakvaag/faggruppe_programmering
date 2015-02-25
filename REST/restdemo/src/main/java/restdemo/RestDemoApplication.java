package restdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.Calendar;

@SpringBootApplication
public class RestDemoApplication {

    @Autowired
    private EmployeeRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(RestDemoApplication.class, args);
    }

    @PostConstruct
    private void init() {
        Employee employee = new Employee();
        employee.setFirstName("Tom-Einar");
        employee.setLastName("Sørensen");
        employee.setTitle("Ninja");
        repository.save(employee);

        employee = new Employee();
        employee.setFirstName("André");
        employee.setLastName("Rakvåg");
        employee.setTitle("Samurai");
        repository.save(employee);
    }
}
