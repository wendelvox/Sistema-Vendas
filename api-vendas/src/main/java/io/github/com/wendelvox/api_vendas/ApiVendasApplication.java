package io.github.com.wendelvox.api_vendas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ApiVendasApplication {
	
	@GetMapping("/hello")
	public String helo() {
		return "Hello world";
	}

	public static void main(String[] args) {
		SpringApplication.run(ApiVendasApplication.class, args);
	}

}
