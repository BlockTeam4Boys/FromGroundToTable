package com.blockTeam4Boys.fromGroundToTable.model.entities;

import com.blockTeam4Boys.fromGroundToTable.model.converters.daoToEntityConverters.RoleNameConverter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;

    @Convert(converter = RoleNameConverter.class)
    @Column(name = "name", unique = true, nullable = false, length = 10)
    private RoleName name;

    public String getName() {
        return this.name.name().toLowerCase();
    }

}
