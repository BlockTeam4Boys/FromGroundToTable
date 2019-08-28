package com.blockTeam4Boys.fromGroundToTable.model.entities;

public enum UnitType {

    KG("кг"),
    LITERS("литры"),
    PIECE("штук"),
    DOZEN("десяток");

    private String value;

    UnitType(String value){
        this.value = value;
    }

    public String getValue(){ return value;}
}
