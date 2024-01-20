import { authServiceQueryKeys } from "./../../queryKeys/queryKeys.consts";
import { API_URL } from "src/envs";
import { LoginResponse } from "./models/loginResponse.types";
import { AuthInterceptor } from "../../utils/authInterceptor";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { UserCredentials } from "./models/userCredentials.types";

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

	logout = async () =>
		this.responseHandler(
			await this.httpClient.get(authServiceQueryKeys.logout()),
		);
	getSession = async (signal: AbortSignal) =>
		this.responseHandler(
			await this.httpClient.get(authServiceQueryKeys.session(), { signal }),
		);
}
export const authService = new AuthService(API_URL);
