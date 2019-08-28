package com.blockTeam4Boys.fromGroundToTable.model.converters.daoToEntityConverters;

import com.blockTeam4Boys.fromGroundToTable.model.entities.UnitType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Arrays;

@Converter(autoApply = true)
public class UnitTypeConverter implements AttributeConverter<UnitType, String> {

    @Override
    public String convertToDatabaseColumn(UnitType unitType) {
        return unitType.getValue().toLowerCase();
    }

    @Override
    public UnitType convertToEntityAttribute(String unitType) {
        return Arrays.stream(UnitType.values())
                .filter(u -> u.getValue().equals(unitType.toLowerCase()))
                .findFirst()
                .get();
    }
}
