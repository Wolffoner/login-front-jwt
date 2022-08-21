import axios, { AxiosInstance } from 'axios';

class FetchService {
    private axios: AxiosInstance;
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3000/api/v0',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    public get = async (url: string): Promise<any> => {
        return this.axios.get(url);
    }

    public post = async (url: string, data: any): Promise<any> => {
        return this.axios.post(url, data);
    }
}

export default FetchService;