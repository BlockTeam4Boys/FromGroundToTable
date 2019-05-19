package com.blockTeam4Boys.fromGroundToTable.ethereum;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
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

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 4.3.0.
 */
public class FoodTracker extends Contract {
    private static final String BINARY = "608060405234801561001057600080fd5b5061041d806100206000396000f3fe608060405234801561001057600080fd5b5060043610610068577c010000000000000000000000000000000000000000000000000000000060003504634c96aead811461006d5780636d228b481461009c578063a22ec8de14610134578063ad3f288614610157575b600080fd5b61008a6004803603602081101561008357600080fd5b503561020b565b60408051918252519081900360200190f35b6100bf600480360360408110156100b257600080fd5b508035906020013561021d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100f95781810151838201526020016100e1565b50505050905090810190601f1680156101265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61008a6004803603604081101561014a57600080fd5b50803590602001356102d9565b6102096004803603606081101561016d57600080fd5b81359160208101359181019060608101604082013564010000000081111561019457600080fd5b8201836020820111156101a657600080fd5b803590602001918460018302840111640100000000831117156101c857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610306945050505050565b005b60009081526020819052604090205490565b60008281526020819052604090206001018054606091908390811061023e57fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156102cc5780601f106102a1576101008083540402835291602001916102cc565b820191906000526020600020905b8154815290600101906020018083116102af57829003601f168201915b5050505050905092915050565b60008281526020819052604081208054839081106102f357fe5b9060005260206000200154905092915050565b6000838152602081815260408220805460018181018355828552838520909101869055908101805491820180825590845292829020845161034f93919092019190850190610356565b5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061039757805160ff19168380011785556103c4565b828001600101855582156103c4579182015b828111156103c45782518255916020019190600101906103a9565b506103d09291506103d4565b5090565b6103ee91905b808211156103d057600081556001016103da565b9056fea165627a7a72305820a134b86fc4e1dcd8dc88f141ade9b452b5a6e37442606abaf0ea928d85554d1d0029";

    public static final String FUNC_GETCOUNTOFSTOCKS = "getCountOfStocks";

    public static final String FUNC_GETSTOCKTIME = "getStockTime";

    public static final String FUNC_GETSTOCKID = "getStockId";

    public static final String FUNC_ADDSTOCKFORPRODUCT = "addStockForProduct";

    @Deprecated
    protected FoodTracker(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected FoodTracker(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected FoodTracker(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected FoodTracker(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public RemoteCall<BigInteger> getCountOfStocks(BigInteger productId) {
        final Function function = new Function(FUNC_GETCOUNTOFSTOCKS, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(productId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}));
        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
    }

    public RemoteCall<String> getStockTime(BigInteger productId, BigInteger stockNumber) {
        final Function function = new Function(FUNC_GETSTOCKTIME, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(productId), 
                new org.web3j.abi.datatypes.generated.Uint256(stockNumber)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteCall<BigInteger> getStockId(BigInteger productId, BigInteger stockNumber) {
        final Function function = new Function(FUNC_GETSTOCKID, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(productId), 
                new org.web3j.abi.datatypes.generated.Uint256(stockNumber)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}));
        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
    }

    public RemoteCall<TransactionReceipt> addStockForProduct(BigInteger productId, BigInteger stockId, String time) {
        final Function function = new Function(
                FUNC_ADDSTOCKFORPRODUCT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(productId), 
                new org.web3j.abi.datatypes.generated.Uint256(stockId), 
                new org.web3j.abi.datatypes.Utf8String(time)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    @Deprecated
    public static FoodTracker load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new FoodTracker(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static FoodTracker load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new FoodTracker(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static FoodTracker load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return new FoodTracker(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static FoodTracker load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new FoodTracker(contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static RemoteCall<FoodTracker> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(FoodTracker.class, web3j, credentials, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<FoodTracker> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(FoodTracker.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<FoodTracker> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(FoodTracker.class, web3j, transactionManager, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<FoodTracker> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(FoodTracker.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }
}
