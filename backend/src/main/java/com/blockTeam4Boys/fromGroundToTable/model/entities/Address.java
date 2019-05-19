package com.blockTeam4Boys.fromGroundToTable.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "addresses")
@Getter
@Setter
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "building_number")
    private int buildingNumber;

    @Column(name = "building_letter")
    private Character buildingLetter;

    @ManyToOne
    @JoinColumn(name = "street")
    private Street street;
}
