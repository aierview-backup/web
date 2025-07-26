// src/core/api/HttpClient.ts
import axios, {AxiosInstance} from "axios";

export default class HttpClient {
    private static instance: AxiosInstance | null;

    public static getInstance(): AxiosInstance {
        if (!HttpClient.instance) {
            HttpClient.instance = axios.create({
                baseURL: "http://localhost:8080/api",
                // baseURL: "https://api-aierview-dev.fly.dev/api",
                timeout: 20000,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            HttpClient.instance.interceptors.response.use(
                (response) => response,
                (error) => {
                    return Promise.reject(error);
                }
            );
        }

        return HttpClient.instance;
    }

    public static getInstanceAppRouter(): AxiosInstance {
        HttpClient.instance = null;
        if (!HttpClient.instance) {
            HttpClient.instance = axios.create({
                baseURL: "api",
                timeout: 20000,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            HttpClient.instance.interceptors.response.use(
                (response) => response,
                (error) => {
                    return Promise.reject(error);
                }
            );
        }

        return HttpClient.instance;
    }
}
