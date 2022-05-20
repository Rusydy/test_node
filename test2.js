const axios = require('axios');
const host = 'api.frankfurter.app';

let input = [
    { "amount": 15000.0, "currency": "IDR" },
    { "amount": 3.1, "currency": "EUR" }
]

input.forEach(function (item) {
    axios.get(`https://api.frankfurter.app/latest?amount=${item.amount}&from=${item.currency}&to=USD`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});