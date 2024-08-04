import axios from "axios";

const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInterceptorInstance.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;
        const originalRequest = error.config;
        if (status === 401 && !originalRequest._retry) {
            // Handle unauthorized access
            originalRequest._retry = true;
            localStorage.removeItem('token')
            try {
                axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/token`,
                    {
                        token: localStorage.getItem('refresh')
                    },
                    {
                        timeout: Number(process.env.API_TIME_OUT)
                    }).then((response) => {
                    localStorage.setItem('token', response?.data?.data?.token)
                    localStorage.setItem('refresh', response?.data?.data?.refresh_token);
                    originalRequest.headers['Authorization'] = 'Bearer ' + response?.data?.message?.token;
                    return axios(originalRequest)
                })
            } catch (error) {
            }
        } else if (status === 404) {
            // Handle not found errors
        } else if(status!== 401) {
            // Handle other errors
            console.log(error)
        }

        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;