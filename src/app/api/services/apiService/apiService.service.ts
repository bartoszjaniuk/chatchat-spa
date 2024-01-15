import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { jwtService } from "../jwtService/jwtService.service";

export abstract class ApiService {
	protected httpClient: AxiosInstance;
	private jwtService: typeof jwtService;

	constructor(baseURL: string) {
		this.httpClient = axios.create({
			baseURL,
			withCredentials: true,
		});
		// TODO: CHECK IF THIS IS WORKING
		this.jwtService = jwtService;
		this.httpClient.interceptors.request.use(
			(config) => {
				const token = this.jwtService.getToken();
				if (token) {
					config.headers["Authorization"] = "Bearer " + token;
				}
				return config;
			},
			(error) => {
				return Promise.reject(error);
			},
		);
	}

	protected responseHandler<T = unknown>({ data }: AxiosResponse<T>) {
		return data;
	}

	protected async get<T = unknown>(url: string, config?: AxiosRequestConfig) {
		return await this.httpClient.get<T>(url, config);
	}

	protected async post<T = unknown, B = unknown>(
		url: string,
		body: B,
		config?: AxiosRequestConfig,
	) {
		return await this.httpClient.post<T>(url, body, config);
	}

	protected async put<T = unknown, B = unknown>(
		url: string,
		body: B,
		config?: AxiosRequestConfig,
	) {
		return await this.httpClient.put<T>(url, body, config);
	}

	protected async patch<T = unknown, B = unknown>(
		url: string,
		body?: B,
		config?: AxiosRequestConfig,
	) {
		return await this.httpClient.patch<T>(url, body, config);
	}

	protected async delete<T = unknown>(
		url: string,
		config?: AxiosRequestConfig,
	) {
		return await this.httpClient.delete<T>(url, config);
	}
}
