package com.blockTeam4Boys.fromGroundToTable.service;

import com.blockTeam4Boys.fromGroundToTable.model.converter.RoleNameConverter;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Customer;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Role;
import com.blockTeam4Boys.fromGroundToTable.model.entities.RoleName;
import com.blockTeam4Boys.fromGroundToTable.model.wrappers.CustomerWrapper;
import com.blockTeam4Boys.fromGroundToTable.repositories.CustomerRepository;
import com.blockTeam4Boys.fromGroundToTable.repositories.RoleRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("customerService")
public class CustomerService implements UserDetailsService {

    private CustomerRepository customerRepository;
    private RoleRepository roleRepository;

    CustomerService(CustomerRepository userRepository,
                    RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
        this.customerRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        return new CustomerWrapper(getUserByUsername(username));
    }

    public Customer createUser(String username, String password, String inn, String role) {
        Customer customer = new Customer();
        customer.setName(username);
        customer.setPassword(new BCryptPasswordEncoder().encode(password));
        customer.setInn(inn);
        RoleName roleName = RoleName.valueOf(role.toUpperCase());
        Role userRole = roleRepository.findByName(roleName).get();
        customer.addRole(userRole);

        return customerRepository.saveAndFlush(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getUserByUsername(String username) {
        Customer customer = customerRepository.findByName(username);
        if (customer == null) {
            throw new UsernameNotFoundException(username);
        }
        return customer;
    }

}
