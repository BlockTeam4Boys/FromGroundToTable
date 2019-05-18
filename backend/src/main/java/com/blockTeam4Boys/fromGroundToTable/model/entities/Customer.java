package com.blockTeam4Boys.fromGroundToTable.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "customers")
@Getter
@Setter
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @OneToMany(mappedBy="sender")
    private Set<Transfer> transfersFromMe;

    @OneToMany(mappedBy="destination")
    private Set<Transfer> transfersToMe;

    @Column(name = "inn", nullable = false)
    private String inn;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "password", nullable = false)
    private String password;

}
