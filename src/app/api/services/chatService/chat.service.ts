import { API_URL } from "src/envs";
import { UserThreads, chatServiceQueryKeys } from "../..";
import { ApiService } from "../apiService/apiService.service";

export class ChatService extends ApiService {
	constructor() {
		super(API_URL);
	}

	getUserThreads = async () =>
		this.responseHandler(
			await this.httpClient.get<UserThreads[]>(chatServiceQueryKeys.threads()),
		);
}

export const chatService = new ChatService();
