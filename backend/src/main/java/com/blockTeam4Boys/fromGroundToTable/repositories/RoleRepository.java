package com.blockTeam4Boys.fromGroundToTable.repositories;

import com.blockTeam4Boys.fromGroundToTable.model.entities.Role;
import com.blockTeam4Boys.fromGroundToTable.model.entities.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(RoleName roleName);

}
