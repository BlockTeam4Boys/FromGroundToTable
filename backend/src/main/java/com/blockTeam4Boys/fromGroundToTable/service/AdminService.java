package com.blockTeam4Boys.fromGroundToTable.service;

import com.blockTeam4Boys.fromGroundToTable.model.entities.Customer;
import com.blockTeam4Boys.fromGroundToTable.model.entities.Product;
import com.blockTeam4Boys.fromGroundToTable.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("admibService")
public class AdminService {

    private ProductRepository productRepository;

    AdminService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(String name) {
        Product product = new Product();
        product.setName(name);

        return productRepository.saveAndFlush(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
