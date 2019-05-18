package com.blockTeam4Boys.fromGroundToTable.controllers;

import com.blockTeam4Boys.fromGroundToTable.model.DTOs.CustomerDTO;
import com.blockTeam4Boys.fromGroundToTable.model.DTOs.ProductDTO;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Customer;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Product;
import com.blockTeam4Boys.fromGroundToTable.service.AdminService;
import com.blockTeam4Boys.fromGroundToTable.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;
    private final CustomerService customerService;

    AdminController(AdminService adminService,
                    CustomerService customerService) {
        this.adminService = adminService;
        this.customerService = customerService;
    }

    @CrossOrigin
    @RequestMapping(path = "/create-product", method = RequestMethod.POST)
    public void addProduct(@RequestParam("name") String name) {
        adminService.createProduct(name);
    }

    @CrossOrigin
    @RequestMapping(path = "/get-products", method = RequestMethod.GET)
    public List<ProductDTO> getAllProducts() {
        ModelMapper modelMapper = new ModelMapper();
        List<Product> products = adminService.getAllProducts();

        List<ProductDTO> productDTOS = new ArrayList<>();

        products.forEach(c -> {
            productDTOS.add(modelMapper.map(c, ProductDTO.class));
        });

        return productDTOS;
    }

    @CrossOrigin
    @RequestMapping(path = "/get-customers", method = RequestMethod.GET)
    public List<CustomerDTO> getAllCustomers() {
        ModelMapper modelMapper = new ModelMapper();
        List<Customer> customers = customerService.getAllCustomers();

        List<CustomerDTO> customerDTOS = new ArrayList<>();

        customers.forEach(c -> {
            customerDTOS.add(modelMapper.map(c, CustomerDTO.class));
        });

        return customerDTOS;
    }
}
