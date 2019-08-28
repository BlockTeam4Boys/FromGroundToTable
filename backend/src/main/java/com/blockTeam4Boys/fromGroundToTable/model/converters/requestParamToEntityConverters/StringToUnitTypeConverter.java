package com.blockTeam4Boys.fromGroundToTable.model.converters.requestParamToEntityConverters;

import com.blockTeam4Boys.fromGroundToTable.model.entities.UnitType;
import org.springframework.core.convert.converter.Converter;

import java.util.Arrays;

public class StringToUnitTypeConverter implements Converter<String, UnitType> {

    @Override
    public UnitType convert(String s) {
            return Arrays.stream(UnitType.values())
                    .filter(u -> u.getValue().equals(s))
                    .findFirst()
                    .get();
        }
}
