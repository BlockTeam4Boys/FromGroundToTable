package com.blockTeam4Boys.fromGroundToTable.controllers;

import com.blockTeam4Boys.fromGroundToTable.service.CustomerService;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController {

    private final CustomerService customerService;

    CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @CrossOrigin
    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public void addStock(@RequestParam("username") String name,
                         @RequestParam("password") String password,
                         @RequestParam("inn") String inn) {
        customerService.createUser(name, password, inn);
    }
}
