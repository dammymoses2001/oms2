import axios from "axios";
import { getAuthToken } from "./helpers";

const options = {
    baseURL:
        process.env.REACT_APP_API_BASE_URL ||
        "http://52.15.81.143:5000/api/v1/",
    headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/json"
    }
};

export const request = axios.create(options);

request.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
