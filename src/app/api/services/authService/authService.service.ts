import { authServiceQueryKeys } from "./../../queryKeys/queryKeys.consts";
import { API_URL } from "src/envs";
import { UserCredentials } from "./models/userCredentials.types";
import { LoginResponse } from "./models/loginResponse.types";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { AuthInterceptor } from "../utils/authInterceptor";

class AuthService {
	private httpClient: AxiosInstance;

	constructor(baseUrl: string) {
		this.httpClient = axios.create({
			baseURL: baseUrl,
			withCredentials: true,
		});

		this.httpClient.interceptors.response.use((res) => res, AuthInterceptor);
	}

	private responseHandler = <T = unknown>({ data }: AxiosResponse<T>) => {
		return data;
	};

	login = async (payload: UserCredentials) =>
		this.responseHandler(
			await this.httpClient.post<LoginResponse>(
				authServiceQueryKeys.login(),
				payload,
			),
		);
	getSession = async () =>
		this.responseHandler(
			await this.httpClient.get(authServiceQueryKeys.session()),
		);
	logout = async () =>
		this.responseHandler(
			await this.httpClient.get(authServiceQueryKeys.logout()),
		);
}

export const authService = new AuthService(API_URL);
