package com.blockTeam4Boys.fromGroundToTable.service;

import com.blockTeam4Boys.fromGroundToTable.model.entities.Customer;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Product;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Transfer;
import com.blockTeam4Boys.fromGroundToTable.repositories.CustomerRepository;
import com.blockTeam4Boys.fromGroundToTable.repositories.ProductRepository;
import com.blockTeam4Boys.fromGroundToTable.repositories.TransferRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Optional;

@Service
public class TransferService {
    private TransferRepository transferRepository;
    private CustomerRepository customerRepository;
    private ProductRepository productRepository;

    TransferService(
            CustomerRepository customerRepository,
            TransferRepository transferRepository,
            ProductRepository productRepository) {
        this.customerRepository = customerRepository;
        this.transferRepository = transferRepository;
        this.productRepository = productRepository;
    }

    public Transfer consistentlyTransfer(long id) {
        Transfer transfer = transferRepository.findById(id).get();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        if (transfer.getDestination().getName().equals(currentPrincipalName)) {
            transfer.setConsistently(true);
        }
        return transferRepository.saveAndFlush(transfer);
    }
    public Transfer createTransfer(String name,
                                  String type,
                                  int weight,
                                  String startDate,
                                  String endDate) throws ParseException {
        Customer to = customerRepository.findByName(name);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        Customer from = customerRepository.findByName(currentPrincipalName);
        Product product = productRepository.findByName(type);
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date start = format.parse(startDate);
        Date end = format.parse(endDate);

        Transfer transfer = new Transfer();
        transfer.setDestination(to);
        transfer.setSender(from);
        transfer.setProduct(product);
        transfer.setWeight(weight);
        transfer.setConsistently(false);
        transfer.setStartDate(start);
        transfer.setEndDate(end);

        return transferRepository.saveAndFlush(transfer);
    }
}
