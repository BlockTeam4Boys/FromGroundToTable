pragma solidity >=0.4.22 <0.6.0;

contract FoodTracker {
    
    struct Product {
        uint[] stocks;
        string[] times;
    }

    mapping (uint => Product) products;

  function addStockForProduct(uint productId, uint stockId, string memory time) public {
      products[productId].stocks.push(stockId);
      products[productId].times.push(time);
  }

  function getCountOfStocks(uint productId) public view returns (uint) {
      return products[productId].stocks.length;
  }

  function getStockId(uint productId, uint stockNumber) public view returns (uint) {
      return products[productId].stocks[stockNumber];
  }

  function getStockTime(uint productId, uint stockNumber) public view returns (string memory) {
      return products[productId].times[stockNumber];
  }
}