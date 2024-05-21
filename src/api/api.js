import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    params: {
        "api_key": process.env.REACT_APP_API_KEY,
    },
});

export default api;
