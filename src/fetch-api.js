import endpoints from './endpoints.js';

function postRequest(url, data) {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    });
}

export default {
    signin: (data) => postRequest(endpoints.signin, data),
    employee_add: (data) => postRequest(endpoints.employee_add, data),
    user_add: (data) => postRequest(endpoints.user_add, data),
};
