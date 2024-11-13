import axios from "axios"

export const API_BASE_URL="https://prafullohgaon-api.vercel.app/?vercelToolbarCode=S8usahpyzjI9-2o"

const jwt = localStorage.getItem("jwt")

export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        'Content-Type':"application/json"
    }
})
