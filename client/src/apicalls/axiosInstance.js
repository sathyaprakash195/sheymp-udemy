import axios from 'axios';
export const axiosInstance = axios.create({
    headers : {
         authorization : `Bearer ${localStorage.getItem('token')}`
    }
})
