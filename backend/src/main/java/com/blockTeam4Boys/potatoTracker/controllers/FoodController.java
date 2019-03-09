package com.blockTeam4Boys.potatoTracker.controllers;

import com.blockTeam4Boys.potatoTracker.ethereum.FoodTrackerService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class FoodController {

    private FoodTrackerService foodTrackerService;

    @Autowired
    FoodController(FoodTrackerService foodTrackerService) {
        this.foodTrackerService = foodTrackerService;
    }

    @CrossOrigin
    @RequestMapping(value = "/addPotato", method = RequestMethod.POST)
    public void addPotato(@RequestParam("id") int id, @RequestParam("name") String name) throws Exception {
        foodTrackerService.addPotato(id, name);
    }

    @CrossOrigin
    @RequestMapping(value = "/addStock", method = RequestMethod.POST)
    public void addStock(@RequestParam("id") int id, @RequestParam("name") String name) throws Exception {
        foodTrackerService.addStockForPotatoById(id, name);
    }

    @CrossOrigin
    @RequestMapping(value = "/getPotatoInfo", method = RequestMethod.POST)
    public String getPotatoInfo(@RequestParam("id") int id) throws Exception {
        List<String> info = foodTrackerService.getPotatoInfo(id);
        return JSONObject.quote(info.toString());
    }
}
