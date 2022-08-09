import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const {VITE_API_URL} = getEnvVariables()

const stiApi = axios.create({
    baseURL: VITE_API_URL
})

// Todo: interceptores

stiApi.interceptors.request.use(config =>{
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    };
    return config;
})

export default stiApi;