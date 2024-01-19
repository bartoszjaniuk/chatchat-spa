import { userServiceQueryKeys } from "./../../queryKeys/queryKeys.consts";
import { API_URL } from "src/envs";
import { ApiService } from "../apiService/apiService.service";
import { AuthUser } from "src/core/auth/context/AuthContext";

export class UserService extends ApiService {
	constructor() {
		super(API_URL);
	}
	getUser() {
		return this.get<AuthUser>(userServiceQueryKeys.user());
	}
}
export const userService = new UserService();
