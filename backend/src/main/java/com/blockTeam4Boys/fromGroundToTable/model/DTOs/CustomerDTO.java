package com.blockTeam4Boys.fromGroundToTable.model.DTOs;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Getter
@Setter
public class CustomerDTO {

    @NotNull
    @NotEmpty
    private String name;

    @NotNull
    private Set<TransferDTO> transfersFromMe;

    @NotNull
    private Set<TransferDTO> transfersToMe;

}
