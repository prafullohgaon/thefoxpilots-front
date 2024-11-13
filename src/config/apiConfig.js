import axios from "axios"

export const API_BASE_URL="https://prafullohgaon-api.vercel.app"

const jwt = localStorage.getItem("jwt") || ""; // Make sure there's a fallback to an empty string if jwt is not found

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
});

