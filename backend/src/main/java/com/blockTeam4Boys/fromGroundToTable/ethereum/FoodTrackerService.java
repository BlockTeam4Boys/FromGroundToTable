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
    private static FoodTrackerContract contract;

    FoodTrackerService() throws Exception {
        this.web3j = Web3j.build(new HttpService(
                "https://rinkeby.infura.io/v3/d3821c84c099405f9f9169c617d26c81"));
        this.credentials = WalletUtils.loadCredentials(
                "koobecaf",
                "/home/accakyra/web3j-4.1.1/bin/key/UTC--2019-02-26T14-36-47.84000000Z--7a38c8db4b0bd1c94edb8c6a8508e25a8b604c3b.json");
    }

    // TODO : remove it plz
    public static void deployContract() throws Exception {
        contract = FoodTrackerContract.deploy(
                Web3j.build(new HttpService(
                        "https://rinkeby.infura.io/v3/d3821c84c099405f9f9169c617d26c81")),
        WalletUtils.loadCredentials(
                "koobecaf",
                "/home/accakyra/web3j-4.1.1/bin/key/UTC--2019-02-26T14-36-47.84000000Z--7a38c8db4b0bd1c94edb8c6a8508e25a8b604c3b.json"),
                new DefaultGasProvider()
        ).send();
        System.out.println("Add a contract on : " + contract.getContractAddress());
    }

    public void addPotato(int potatoId, String potatoData) throws Exception {
        contract.newPotatos(BigInteger.valueOf(potatoId), potatoData).send();
    }

    public void addStockForPotatoById(int potatoId, String stockName) throws Exception {
        contract.addSeller(BigInteger.valueOf(potatoId), stockName).send();
    }

    public List<String> getPotatoInfo(int potatoId) throws Exception {
        BigInteger stocksCount = contract.getPotatoStockCount(BigInteger.valueOf(potatoId)).send();
        String potatoName = contract.getPotatoInfo(BigInteger.valueOf(potatoId)).send();

        List<String> potatoInfo = new ArrayList();

        potatoInfo.add(potatoName);
        for (int i = 0; i < stocksCount.intValue(); i++) {
            String stockName = contract.getPotatoStockInfo(BigInteger.valueOf(potatoId), BigInteger.valueOf(i)).send();
            potatoInfo.add(stockName);
        }
        return potatoInfo;
    }
}
