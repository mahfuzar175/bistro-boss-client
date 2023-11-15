import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSercure = () => {
    return axiosSecure;
};

export default useAxiosSercure;