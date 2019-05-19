package com.blockTeam4Boys.fromGroundToTable.repositories;

import com.blockTeam4Boys.fromGroundToTable.model.entities.Street;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StreetRepository extends JpaRepository<Street, Integer> {
    Street findByName(String name);
}