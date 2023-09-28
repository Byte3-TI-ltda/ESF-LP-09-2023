import axios, { AxiosInstance } from "axios";

const apiBaseURL = (): string => {
    return "https://api-ur/";
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