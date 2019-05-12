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
                    onSuccessLogin();
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
