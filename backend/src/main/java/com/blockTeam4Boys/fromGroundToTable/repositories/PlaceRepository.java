package com.blockTeam4Boys.fromGroundToTable.repositories;

import com.blockTeam4Boys.fromGroundToTable.model.entities.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, Long> {
}