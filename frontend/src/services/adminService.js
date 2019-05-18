import axios from 'axios';

export function createProduct(name, onSuccess, onReject) {

    const data = new FormData();
    data.append("name", name);

    fetch("/admin/create-product", {
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

export function getAllCustomers(onSuccess) {

    axios.get('admin/get-customers')
        .then(customers => {
            onSuccess(customers)
        })
}

export function getAllProducts(onSuccess) {

    axios.get('admin/get-products')
        .then(products => {
            onSuccess(products)
        })
}