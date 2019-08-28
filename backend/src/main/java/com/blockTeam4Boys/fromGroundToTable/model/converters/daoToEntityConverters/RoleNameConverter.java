package com.blockTeam4Boys.fromGroundToTable.model.converters.daoToEntityConverters;

import com.blockTeam4Boys.fromGroundToTable.model.entities.RoleName;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class RoleNameConverter implements AttributeConverter<RoleName, String> {

    @Override
    public String convertToDatabaseColumn(RoleName roleName) {
        return roleName.name().toLowerCase();
    }

    @Override
    public RoleName convertToEntityAttribute(String roleName) {
        return RoleName.valueOf(roleName.toUpperCase());
    }
}
