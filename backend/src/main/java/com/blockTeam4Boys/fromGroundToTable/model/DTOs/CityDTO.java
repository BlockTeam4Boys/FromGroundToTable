package com.blockTeam4Boys.fromGroundToTable.model.DTOs;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter

public class CityDTO {
    @NotNull
    @NotEmpty
    private String name;

    private DistrictDTO district;
}
