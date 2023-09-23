import axios from "axios";

const baseURL = "https://...";

export const ApiService = () => {
    return axios.create({
        baseURL: baseURL,
        headers: {
            "Content-Type": "application/json"
        },
    });
};
