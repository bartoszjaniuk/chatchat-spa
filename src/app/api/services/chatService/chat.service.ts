import { API_URL } from "src/envs";
import { UserThreads, chatServiceQueryKeys } from "../..";
import { ApiService } from "../apiService/apiService.service";
import { CreateChat, CreatedChatResponse } from "./models/chat.model";

export class ChatService extends ApiService {
	constructor() {
		super(API_URL);
	}

	getUserThreads = async () =>
		this.responseHandler(
			await this.httpClient.get<UserThreads[]>(chatServiceQueryKeys.threads()),
		);

	createChat = async (payload: CreateChat) =>
		this.responseHandler(
			await this.httpClient.post<CreatedChatResponse>(
				chatServiceQueryKeys.createChat(),
				payload,
			),
		);
}

export const chatService = new ChatService();
