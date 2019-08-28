package com.blockTeam4Boys.fromGroundToTable.ethereum;

import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.ClientTransactionManager;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.DefaultGasProvider;

import java.io.File;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class FoodTrackerService {

    private static FoodTracker contract;

    public static void deployContract() throws Exception {
        contract = FoodTracker.deploy(
                Web3j.build(new HttpService(
                        "https://rinkeby.infura.io/v3/d3821c84c099405f9f9169c617d26c81")),
        WalletUtils.loadCredentials(
                "koobecaf",
                "/home/accakyra/.ethereum/keystore/UTC--2019-08-28T09-18-48.453314156Z--32d4daa8e88fcc478c66c11088f188efa87e49d7"),
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
