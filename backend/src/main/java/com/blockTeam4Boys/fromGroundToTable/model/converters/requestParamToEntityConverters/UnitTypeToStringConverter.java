package com.blockTeam4Boys.fromGroundToTable.model.converters.requestParamToEntityConverters;

import com.blockTeam4Boys.fromGroundToTable.model.entities.UnitType;
import org.modelmapper.spi.MappingContext;

public class UnitTypeToStringConverter implements org.modelmapper.Converter<UnitType, String> {

    @Override
    public String convert(MappingContext<UnitType, String> mappingContext) {
        return mappingContext.getSource().getValue();
    }
}
