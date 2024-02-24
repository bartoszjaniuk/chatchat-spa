import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "src/envs";
import { UserCredentials, LoginResponse, authServiceQueryKeys } from "../..";

class AuthService {
	private httpClient: AxiosInstance;

	constructor(baseUrl: string) {
		this.httpClient = axios.create({
			baseURL: baseUrl,
			withCredentials: true,
		});
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

	logout = async () =>
		this.responseHandler(
			await this.httpClient.get(authServiceQueryKeys.logout()),
		);
	getSession = async () =>
		this.responseHandler(
			await this.httpClient.get(authServiceQueryKeys.session()),
		);
}
export const authService = new AuthService(API_URL);
