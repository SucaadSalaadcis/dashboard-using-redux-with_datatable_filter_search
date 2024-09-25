import axios from "axios";

const axiosPublicURL = axios.create({
    baseURL: 'http://localhost:3000/',
});

export default function AxiosHook() {
    return axiosPublicURL;
}
