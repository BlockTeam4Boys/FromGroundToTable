package com.blockTeam4Boys.fromGroundToTable.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
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

    @OneToMany(mappedBy="customer")
    private Set<Place> places;

    @ManyToMany
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", table = "customers"),
            inverseJoinColumns = @JoinColumn(name = "role_id", table = "role"))
    private Set<Role> roles = new HashSet<>();


    @Column(name = "inn", nullable = false)
    private String inn;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "password", nullable = false)
    private String password;

    public void addRole(Role role) {
        roles.add(role);
    }

}
