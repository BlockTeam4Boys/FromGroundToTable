package com.blockTeam4Boys.fromGroundToTable.service;

import com.blockTeam4Boys.fromGroundToTable.entities.Customer;
import com.blockTeam4Boys.fromGroundToTable.model.wrappers.CustomerWrapper;
import com.blockTeam4Boys.fromGroundToTable.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service("customerService")
public class CustomerService implements UserDetailsService {

    private CustomerRepository customerRepository;

    @Autowired
    CustomerService(CustomerRepository userRepository) {
        this.customerRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        return new CustomerWrapper(getUserByUsername(username));
    }

    public Customer createUser(String username, String password, String inn) {
        Customer customer = new Customer();
        customer.setName(username);
        customer.setPassword(new BCryptPasswordEncoder().encode(password));
        customer.setInn(inn);

        return customerRepository.saveAndFlush(customer);
    }

    public Customer getUserByUsername(String username) {
        Customer customer = customerRepository.findByName(username);
        if (customer == null) {
            throw new UsernameNotFoundException(username);
        }
        return customer;
    }
}
