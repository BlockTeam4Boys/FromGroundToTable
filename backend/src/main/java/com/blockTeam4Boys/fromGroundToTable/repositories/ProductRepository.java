package com.blockTeam4Boys.fromGroundToTable.repositories;

import com.blockTeam4Boys.fromGroundToTable.model.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    Product findByName(String name);

}
