package com.blockTeam4Boys.fromGroundToTable.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "transfers")
@Getter
@Setter
public class Transfer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @ManyToOne
    @JoinColumn(name="destination")
    private Customer destination;

    @ManyToOne
    @JoinColumn(name="sender")
    private Customer sender;

    @ManyToOne
    @JoinColumn(name="product")
    private Product product;

    @Column(name = "startdate")
    private Date startDate;

    @Column(name = "enddate")
    private Date endDate;

    @Column(name = "weight")
    private int weight;

    @Column(name = "consistently")
    private boolean consistently;

}
