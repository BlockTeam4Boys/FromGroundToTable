package com.blockTeam4Boys.fromGroundToTable.model.DTOs;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PlaceDTO {
    private int id;

    private AddressDTO legalAddress;

    private AddressDTO physicalAddress;
}
