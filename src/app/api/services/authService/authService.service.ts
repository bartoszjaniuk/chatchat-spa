import { authServiceQueryKeys } from "./../../queryKeys/queryKeys.consts";
import { API_URL } from "src/envs";
import { ApiService } from "../apiService/apiService.service";
import { UserCredentials } from "./models/userCredentials.types";
import { LoginResponse } from "./models/loginResponse.types";

class AuthService extends ApiService {
	constructor() {
		super(API_URL);
	}

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
}
export const authService = new AuthService();
