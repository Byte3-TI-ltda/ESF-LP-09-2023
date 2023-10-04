import axios, { AxiosInstance } from "axios";

const apiBaseURL = (): string => {
    return "https://esf-lp-backend.onrender.com/";
};

const create = (): AxiosInstance => {
    return axios.create({
        baseURL: apiBaseURL(),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const ApiService = {
    apiBaseURL,
    create,
};