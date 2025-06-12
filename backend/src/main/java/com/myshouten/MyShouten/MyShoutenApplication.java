package com.myshouten.MyShouten;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MyShoutenApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyShoutenApplication.class, args);
    }
} 