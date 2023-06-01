import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://task-application-gz3v.vercel.app/",
    withCredentials: true
})

export default axiosInstance