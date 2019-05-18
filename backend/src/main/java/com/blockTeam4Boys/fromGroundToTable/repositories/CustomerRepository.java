package com.blockTeam4Boys.fromGroundToTable.repositories;

import com.blockTeam4Boys.fromGroundToTable.model.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Customer findByName(String name);
}
