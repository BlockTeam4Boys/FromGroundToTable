import axios from "axios";

export function createPlace(physicalRegion,
                            physicalDistrict,
                            physicalCity,
                            physicalStreet,
                            physicalNumber,
                            physicalLetter,
                            legalRegion,
                            legalDistrict,
                            legalCity,
                            legalStreet,
                            legalNumber,
                            legalLetter,
                            onSuccess,
                            onReject) {
    const data = new FormData();
    data.append("physicalRegion", physicalRegion);
    data.append("physicalDistrict", physicalDistrict);
    data.append("physicalCity", physicalCity);
    data.append("physicalStreet", physicalStreet);
    data.append("physicalNumber", physicalNumber);
    data.append("physicalLetter", physicalLetter);
    data.append("legalRegion", legalRegion);
    data.append("legalDistrict", legalDistrict);
    data.append("legalCity", legalCity);
    data.append("legalStreet", legalStreet);
    data.append("legalNumber", legalNumber);
    data.append("legalLetter", legalLetter);

    fetch("/create-place", {
        method: "POST",
        credentials: "include",
        body: new URLSearchParams(data)
    })
        .then(v => {
            onSuccess();
        }).catch(() => {
        onReject()
    })
}

export function confirmDelivery(productId, stockId, onSuccess, onReject) {
    const data = new FormData();
    data.append("productId", productId);
    data.append("stockId", stockId);

    fetch("/confirm", {
        method: "POST",
        credentials: "include",
        body: new URLSearchParams(data)
    })
        .then(v => {
            onSuccess();
        }).catch(() => {
        onReject()
    })
}

export function getMyPlaces(onSuccess) {
    axios.get('/getMyPlaces')
        .then(places => {
            onSuccess(places)
        })
}
