import axios from "axios";

const baseURL = ''

const axiosInstance = axios.create({
    baseURL,
})

export default axiosInstance