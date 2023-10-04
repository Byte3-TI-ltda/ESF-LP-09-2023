import axios, { AxiosInstance } from "axios";

const apiBaseURL = (): string => {
    return "https://esf-api-09-2023.onrender.com/";
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