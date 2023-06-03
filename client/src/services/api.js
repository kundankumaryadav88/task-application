import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: "https://task-application-bxvx.vercel.app/",
    withCredentials: true
})

export default axiosInstance