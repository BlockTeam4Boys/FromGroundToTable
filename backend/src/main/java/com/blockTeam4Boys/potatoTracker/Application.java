package com.blockTeam4Boys.potatoTracker;

import com.blockTeam4Boys.potatoTracker.ethereum.FoodTrackerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) throws Exception {
		FoodTrackerService.deployContract();
		SpringApplication.run(Application.class, args);
	}
}
