import axios from 'axios';

const unsplash = axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID eb7ca8004cf0aa72f521080c87ba5e8704a7318da34057a26b9da049867d941a'
    }
});

export default unsplash;