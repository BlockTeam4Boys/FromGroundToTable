package com.blockTeam4Boys.fromGroundToTable.controllers;

import com.blockTeam4Boys.fromGroundToTable.model.DTOs.CustomerDTO;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Customer;
import com.blockTeam4Boys.fromGroundToTable.service.CustomerService;
import com.blockTeam4Boys.fromGroundToTable.service.TransferService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CustomerController {

    private final CustomerService customerService;
    private final TransferService transferService;

    CustomerController(CustomerService customerService,
                       TransferService transferService) {
        this.transferService = transferService;
        this.customerService = customerService;
    }

    @CrossOrigin
    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public void registration(@RequestParam("username") String name,
                         @RequestParam("password") String password,
                         @RequestParam("inn") String inn) {
        customerService.createUser(name, password, inn);
    }

    @CrossOrigin
    @RequestMapping(value = "/me", method = RequestMethod.GET)
    public CustomerDTO getMe() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        ModelMapper modelMapper = new ModelMapper();
        Customer customer = customerService.getUserByUsername(currentPrincipalName);

        return modelMapper.map(customer, CustomerDTO.class);
    }

    @CrossOrigin
    @RequestMapping(value = "/create-transfer", method = RequestMethod.POST)
    public void createTransfers(@RequestParam("name") String name,
                         @RequestParam("weight") String weight,
                         @RequestParam("type") String type,
                         @RequestParam("startDate") String startDate,
                         @RequestParam("endDate") String endDate) throws ParseException {
        transferService.createTransfer(name, type, Integer.parseInt(weight), startDate, endDate);
    }

    @CrossOrigin
    @RequestMapping(value = "/consistently-transfer", method = RequestMethod.POST)
    public void consistentlyTransfer(@RequestParam("id") int id) {
        transferService.consistentlyTransfer(id);
    }
}
