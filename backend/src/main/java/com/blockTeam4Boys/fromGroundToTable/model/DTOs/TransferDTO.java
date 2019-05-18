package com.blockTeam4Boys.fromGroundToTable.model.DTOs;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
public class TransferDTO {

    @NotNull
    @NotEmpty
    private int id;

    @NotNull
    @NotEmpty
    private ProductDTO product;

    @NotNull
    private String destination;

    @NotNull
    @NotEmpty
    private int weight;

    @NotNull
    @NotEmpty
    private Date startDate;

    @NotNull
    @NotEmpty
    private Date endDate;

    @NotNull
    @NotEmpty
    private boolean consistently;

}