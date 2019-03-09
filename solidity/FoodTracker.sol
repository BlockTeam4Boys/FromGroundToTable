pragma solidity >=0.4.22 <0.6.0;

contract FoodTracker {
    
    struct Stock {
        string name;
    }
    
    struct Potato {
        string data;
        Stock[] stocks;
    }
  
    mapping (uint => Potato) private potatos;
    
  function newPotatos(uint id, string memory data) public {
      potatos[id].data = data;
  }

  function addSeller(uint potatoId, string memory stockName) public {
      Stock memory stock = Stock(stockName);   
      potatos[potatoId].stocks.push(stock);
  }
  
    function getPotatoStockCount(uint potatoId) public view returns (uint) {
      return potatos[potatoId].stocks.length;
  }
     function getPotatoStockInfo(uint potatoId, uint stockNumber) public view returns (string memory) {
     return potatos[potatoId].stocks[stockNumber].name;
  }
  
  function getPotatoInfo(uint potatoNumber) public view returns (string memory) {
      return potatos[potatoNumber].data;
  }
}