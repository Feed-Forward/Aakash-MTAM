import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://mtamnyc--ttgcomnty.sandbox.my.salesforce.com/"
})
export const getToken = () =>
    localStorage.getItem("token") ? localStorage.getItem("token") : null

axiosInstance.interceptors.request.use((request)=>{
    let token = getToken();
    request.headers.Authorization = `Bearer ${token}`
    // request.headers ["Access-Control-Allow-Origin"] = "*"
    return request
},
(error)=>{
    return Promise.reject(error)
}
)
export default axiosInstance;
