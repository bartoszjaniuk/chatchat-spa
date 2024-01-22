import { API_URL } from "src/envs";
import { ApiService } from "../apiService/apiService.service";
import { userServiceQueryKeys } from "../../queryKeys/queryKeys.consts";

export class UserService extends ApiService {
	constructor() {
		super(API_URL);
	}

	async getUser() {
		return this.httpClient.get(userServiceQueryKeys.me());
	}

	async getAppUsers() {
		return this.httpClient.get(userServiceQueryKeys.appUsers());
	}
}

export const userService = new UserService();
