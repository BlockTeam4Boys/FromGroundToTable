package com.blockTeam4Boys.fromGroundToTable.ethereum;

import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.gas.DefaultGasProvider;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class FoodTrackerService {

    private Web3j web3j;
    private Credentials credentials;
    private static FoodTracker contract;

    FoodTrackerService() throws Exception {
        this.web3j = Web3j.build(new HttpService(
                "https://rinkeby.infura.io/v3/d3821c84c099405f9f9169c617d26c81"));
        this.credentials = WalletUtils.loadCredentials(
                "koobecaf",
                "/home/accakyra/web3j-4.1.1/bin/key/UTC--2019-02-26T14-36-47.84000000Z--7a38c8db4b0bd1c94edb8c6a8508e25a8b604c3b.json");
    }

    public static void deployContract() throws Exception {
        contract = FoodTracker.deploy(
                Web3j.build(new HttpService(
                        "https://rinkeby.infura.io/v3/d3821c84c099405f9f9169c617d26c81")),
        WalletUtils.loadCredentials(
                "koobecaf",
                "/home/accakyra/web3j-4.1.1/bin/key/UTC--2019-02-26T14-36-47.84000000Z--7a38c8db4b0bd1c94edb8c6a8508e25a8b604c3b.json"),
                new DefaultGasProvider()
        ).send();
        System.out.println("Add a contract on : " + contract.getContractAddress());
    }

    public void addStockForProduct(int productId, int stockId, String data) throws Exception {
        contract.addStockForProduct(BigInteger.valueOf(productId),
                BigInteger.valueOf(stockId), data).send();
    }

    private int getCountOfStocks(int productId) throws Exception {
       return contract.getCountOfStocks(BigInteger.valueOf(productId)).send().intValue();
    }

    private int getStockId(int productId, int stockNumber) throws Exception {
       return contract.getStockId(BigInteger.valueOf(productId),
               BigInteger.valueOf(stockNumber)).send().intValue();
    }

    private String getStockData(int productId, int stockNumber) throws Exception {
        return contract.getStockTime(BigInteger.valueOf(productId),
                BigInteger.valueOf(stockNumber)).send();
    }

    public List<Integer> getProductStocksId(int productId) throws Exception {
        int stocksCount = getCountOfStocks(productId);

        List<Integer> productStocks = new ArrayList<>();

        for (int i = 0; i < stocksCount; i++) {
            productStocks.add(getStockId(productId, i));
        }

        return productStocks;
    }

    public List<String> getProductStocksData(int productId) throws Exception {
        int stocksCount = getCountOfStocks(productId);

        List<String> productStocks = new ArrayList<>();

        for (int i = 0; i < stocksCount; i++) {
            productStocks.add(getStockData(productId, i));
        }

        return productStocks;
    }
}
