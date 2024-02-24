import { stringify } from "qs";
import { API_URL } from "src/envs";
import { UserAuthResponse, userServiceQueryKeys } from "../..";
import { ApiService } from "../apiService/apiService.service";

export class UserService extends ApiService {
	constructor() {
		super(API_URL);
	}

	getAppUsers = async () =>
		this.responseHandler(
			await this.httpClient.get<UserAuthResponse[]>(
				userServiceQueryKeys.appUsers(),
			),
		);

	getFilteredUsers = async (params: UserParams) => {
		const queryString = getQueryStringFromParams(params);
		return this.responseHandler(
			await this.httpClient.get<UserAuthResponse[]>(`/users${queryString}`),
		);
	};

	getUser = async () =>
		this.responseHandler(await this.httpClient.get(userServiceQueryKeys.me()));

	addFriend = async (friendId: string) =>
		this.responseHandler(await this.httpClient.post(`users/add/${friendId}`));
}

export const userService = new UserService();

export type UserParams = {
	id?: string;
	email?: string;
	username?: string;
};

export const getQueryStringFromParams = (queryParams: {
	[key: string]: unknown;
}) => {
	const options: qs.IStringifyOptions = {
		addQueryPrefix: true,
		skipNulls: true,
	};

	const filteredQueryParams = Object.keys(queryParams).reduce(
		(params, paramName) => {
			if (!queryParams[paramName]) {
				return params;
			}

			return { ...params, [paramName]: queryParams[paramName] };
		},
		{},
	);

	return stringify(filteredQueryParams, options);
};
