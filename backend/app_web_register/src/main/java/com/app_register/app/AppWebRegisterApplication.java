package com.app_register.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.app_register.app.config.CorsConfig;

@Import(CorsConfig.class)
@SpringBootApplication
public class AppWebRegisterApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppWebRegisterApplication.class, args);
	}

}
