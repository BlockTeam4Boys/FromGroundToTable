package com.blockTeam4Boys.fromGroundToTable.service;

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
    // in this case we need to use inn as username
    // because UserDetailsService has only loadUserByUsername method
    // but we wont login by inn
    public UserDetails loadUserByUsername(String inn) {
        return new CustomerWrapper(getUserByInn(inn));
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

    public Customer getUserByInn(String inn) {
        Customer customer = customerRepository.findByInn(inn);
        if (customer == null) {
            throw new UsernameNotFoundException(inn);
        }
        return customer;
    }

    public Customer getUserByUsername(String name) {
        Customer customer = customerRepository.findByName(name);
        if (customer == null) {
            throw new UsernameNotFoundException(name);
        }
        return customer;
    }

}
