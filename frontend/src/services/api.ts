import axios from "axios";

export const api=axios.create({
    baseURL:"http://SEU_IP:3000",
    timeout:5000,
});