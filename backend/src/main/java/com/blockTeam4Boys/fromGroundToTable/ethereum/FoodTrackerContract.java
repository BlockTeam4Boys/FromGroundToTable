package com.blockTeam4Boys.fromGroundToTable.ethereum;

import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;

public class FoodTrackerContract extends Contract {
    private static final String BINARY = "608060405234801561001057600080fd5b5061057d806100206000396000f3fe608060405234801561001057600080fd5b5060043610610073577c010000000000000000000000000000000000000000000000000000000060003504631712f58281146100785780631895450a146100a75780633c9062021461013957806389bbfc2e1461015c5780638b1caa181461020b575b600080fd5b6100956004803603602081101561008e57600080fd5b50356102b8565b60408051918252519081900360200190f35b6100c4600480360360208110156100bd57600080fd5b50356102cd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fe5781810151838201526020016100e6565b50505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100c46004803603604081101561014f57600080fd5b508035906020013561036c565b6102096004803603604081101561017257600080fd5b8135919081019060408101602082013564010000000081111561019457600080fd5b8201836020820111156101a657600080fd5b803590602001918460018302840111640100000000831117156101c857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610428945050505050565b005b6102096004803603604081101561022157600080fd5b8135919081019060408101602082013564010000000081111561024357600080fd5b82018360208201111561025557600080fd5b8035906020019184600183028401116401000000008311171561027757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061044a945050505050565b60009081526020819052604090206001015490565b6000818152602081815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b50505050509050919050565b60008281526020819052604090206001018054606091908390811061038d57fe5b600091825260209182902001805460408051601f600260001961010060018716150201909416939093049283018590048502810185019091528181529283018282801561041b5780601f106103f05761010080835404028352916020019161041b565b820191906000526020600020905b8154815290600101906020018083116103fe57829003601f168201915b5050505050905092915050565b6000828152602081815260409091208251610445928401906104a4565b505050565b610452610522565b50604080516020818101835283825260008581528082529283206001908101805491820180825590855293829020835180519495948694929093019261049b92849201906104a4565b50505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104e557805160ff1916838001178555610512565b82800160010185558215610512579182015b828111156105125782518255916020019190600101906104f7565b5061051e929150610534565b5090565b60408051602081019091526060815290565b61054e91905b8082111561051e576000815560010161053a565b9056fea165627a7a72305820d4e531603e51acc8b58b77c7b36751da793ad58118c3573e7e2516d87d4356f40029";

    public static final String FUNC_GETPOTATOSTOCKCOUNT = "getPotatoStockCount";

    public static final String FUNC_GETPOTATOINFO = "getPotatoInfo";

    public static final String FUNC_GETPOTATOSTOCKINFO = "getPotatoStockInfo";

    public static final String FUNC_NEWPOTATOS = "newPotatos";

    public static final String FUNC_ADDSELLER = "addSeller";

    @Deprecated
    protected FoodTrackerContract(String contractAddress,
                                  Web3j web3j,
                                  Credentials credentials,
                                  BigInteger gasPrice,
                                  BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected FoodTrackerContract(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected FoodTrackerContract(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected FoodTrackerContract(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public RemoteCall<BigInteger> getPotatoStockCount(BigInteger potatoId) {
        final Function function = new Function(FUNC_GETPOTATOSTOCKCOUNT,
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(potatoId)),
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}));
        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
    }

    public RemoteCall<String> getPotatoInfo(BigInteger potatoNumber) {
        final Function function = new Function(FUNC_GETPOTATOINFO, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(potatoNumber)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteCall<String> getPotatoStockInfo(BigInteger potatoId, BigInteger stockNumber) {
        final Function function = new Function(FUNC_GETPOTATOSTOCKINFO, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(potatoId), 
                new org.web3j.abi.datatypes.generated.Uint256(stockNumber)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteCall<TransactionReceipt> newPotatos(BigInteger id, String data) {
        final Function function = new Function(
                FUNC_NEWPOTATOS, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(id), 
                new org.web3j.abi.datatypes.Utf8String(data)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<TransactionReceipt> addSeller(BigInteger potatoId, String stockName) {
        final Function function = new Function(
                FUNC_ADDSELLER, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(potatoId), 
                new org.web3j.abi.datatypes.Utf8String(stockName)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    @Deprecated
    public static FoodTrackerContract load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new FoodTrackerContract(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static FoodTrackerContract load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new FoodTrackerContract(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static FoodTrackerContract load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return new FoodTrackerContract(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static FoodTrackerContract load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new FoodTrackerContract(contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static RemoteCall<FoodTrackerContract> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(FoodTrackerContract.class, web3j, credentials, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<FoodTrackerContract> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(FoodTrackerContract.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<FoodTrackerContract> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(FoodTrackerContract.class, web3j, transactionManager, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<FoodTrackerContract> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(FoodTrackerContract.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }
}
