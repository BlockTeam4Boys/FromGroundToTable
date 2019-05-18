import axios from "axios";

export function createTransfers(name, weight, type, startDate, endDate, onSuccess) {

    const data = new FormData();
    data.append("name", name);
    data.append("weight", weight);
    data.append("type", type);
    data.append("startDate", startDate);
    data.append("endDate", endDate);

    console.log(name)
    console.log(weight)
    console.log(type)
    console.log(startDate)
    console.log(endDate)
    fetch("/create-transfer", {
        method: "POST",
        credentials: "include",
        body: new URLSearchParams(data)
    })
        .then(v => {
            onSuccess();
        }).catch(() => {
    })
}

export function consistentlyTransfer(id) {

    const data = new FormData();
    data.append("id", id);

    fetch("/consistently-transfer", {
        method: "POST",
        credentials: "include",
        body: new URLSearchParams(data)
    })
        .then(v => {
        }).catch(() => {
    })
}

export function tryLogin(username, password, onSuccessLogin) {

        const data = new FormData();
        data.append("username", username);
        data.append("password", password);

        fetch("/dummyLogin", {
            method: "POST",
            credentials: "include",
            body: new URLSearchParams(data)
        })
            .then(v => {
                if (v.url.indexOf("dummyLogin") !== -1) {
                    onSuccessLogin(username);
                }
            })
}
export function tryRegistration(username, password, inn, onSuccessLogin, onFailureRegistration) {

        const data = new FormData();
        data.append("username", username);
        data.append("password", password);
        data.append("inn", inn);

        fetch("/registration", {
            method: "POST",
            credentials: "include",
            body: new URLSearchParams(data)
        })
            .then(v => {
                onSuccessLogin();
            }).
        catch(() => {
            onFailureRegistration();
        })
}

export function getMe(onSuccess) {

    axios.get('/me')
        .then(customer => {
            onSuccess(customer)
        })
}