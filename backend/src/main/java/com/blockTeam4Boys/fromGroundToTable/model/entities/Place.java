package com.blockTeam4Boys.fromGroundToTable.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "places")
@Getter
@Setter
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @ManyToOne
    @JoinColumn(name = "physical_address")
    private Address physicalAddress;

    @ManyToOne
    @JoinColumn(name = "legal_address")
    private Address legalAddress;

    @ManyToOne
    @JoinColumn(name="customer")
    private Customer customer;

}
