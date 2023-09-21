import axios from "axios";

const instance = axios.create({
    baseURL: "https://internshala-backend.onrender.com/",
    withCredentials: true,
});

export default instance;