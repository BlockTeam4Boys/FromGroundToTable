import axios from "axios";

export function getStocks(id, onSuccess) {
    axios.get('/get-stock', {
        params: {
            productId: id
        }
    }).then(stocks => {
        onSuccess(stocks)
    });
}
