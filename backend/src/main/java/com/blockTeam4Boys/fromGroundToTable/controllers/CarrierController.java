package com.blockTeam4Boys.fromGroundToTable.controllers;

import com.blockTeam4Boys.fromGroundToTable.model.DTOs.PlaceDTO;
import com.blockTeam4Boys.fromGroundToTable.model.DTOs.ProductDTO;
import com.blockTeam4Boys.fromGroundToTable.model.DTOs.StockDTO;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Place;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Product;
import com.blockTeam4Boys.fromGroundToTable.service.CarrierService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
public class CarrierController {

    private CarrierService carrierService;

    CarrierController(CarrierService carrierService) {
        this.carrierService = carrierService;
    }

    @CrossOrigin
    @RequestMapping(path = "/create-place", method = RequestMethod.POST)
    public void createPlace(@RequestParam("legalRegion") String legalRegion,
                           @RequestParam("legalDistrict") String legalDistrict,
                           @RequestParam("legalCity") String legalCity,
                           @RequestParam("legalStreet") String legalStreet,
                           @RequestParam("legalNumber") String legalNumber,
                           @RequestParam("legalLetter") String legalLetter,
                           @RequestParam("physicalRegion") String physicalRegion,
                           @RequestParam("physicalDistrict") String physicalDistrict,
                           @RequestParam("physicalCity") String physicalCity,
                           @RequestParam("physicalStreet") String physicalStreet,
                           @RequestParam("physicalNumber") String physicalNumber,
                           @RequestParam("physicalLetter") String physicalLetter) {
        carrierService.createPlace(physicalRegion,
                physicalDistrict,
                physicalCity,
                physicalStreet,
                physicalNumber,
                physicalLetter,
                legalRegion,
                legalDistrict,
                legalCity,
                legalStreet,
                legalNumber,
                legalLetter
        );
    }

    @CrossOrigin
    @RequestMapping(path = "/confirm", method = RequestMethod.POST)
    public void confirm(@RequestParam("productId") int productId,
                            @RequestParam("stockId") int stockId) throws Exception {
        carrierService.confirmDelivery(productId, stockId);
    }

    @CrossOrigin
    @RequestMapping(path = "/get-stock", method = RequestMethod.GET)
    public List<StockDTO> getStock(@RequestParam("productId") int productId) throws Exception {
       return carrierService.getStock(productId);
    }

    @CrossOrigin
    @RequestMapping(path = "/getMyPlaces", method = RequestMethod.GET)
    public List<PlaceDTO> createPlace() {

        ModelMapper modelMapper = new ModelMapper();
        Set<Place> products = carrierService.getMyPlaces();

        List<PlaceDTO> placeDTOS = new ArrayList<>();

        products.forEach(c -> {
            placeDTOS.add(modelMapper.map(c, PlaceDTO.class));
        });

        return placeDTOS;

    }

}
