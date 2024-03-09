import { refreshToken } from "./utils/refreshToken";
import { refreshInterceptor } from "./utils/refreshInterceptor";
import { redirectUnauthorizedUser } from "./utils/redirectUnauthorizedUser";
import { isAxiosError } from "./utils/isAxiosError";
import { isAuthError } from "./utils/isAuthError";
import { UserCredentials } from "./services/authService/models/userCredentials.types";
import { userService } from "./services/userService/user.service";
import { authService } from "./services/authService/authService.service";
import {
	authServiceQueryKeys,
	chatServiceQueryKeys,
	userServiceQueryKeys,
} from "./queryKeys/queryKeys.consts";
import { LoginResponse } from "./services/authService/models/loginResponse.types";
import { UserAuthResponse } from "./services/authService/models/userAuthResponse.types";
import {
	CreatedChatResponse,
	UserThreads,
} from "./services/chatService/models/chat.model";
import { codeRedirectionInterceptor } from "./utils/codeRedirection";
import { authInterceptor } from "./utils/authInterceptor";
import { chatService } from "./services/chatService/chat.service";
import { FilteredUser } from "./services/userService/models/filteredUser";
import { UserFriend } from "./services/userService/models/userFriend";

// Query Keys
export { authServiceQueryKeys, userServiceQueryKeys, chatServiceQueryKeys };

// Api Services
export { chatService, authService, userService };

// Models
export type {
	LoginResponse,
	UserAuthResponse,
	UserCredentials,
	UserThreads,
	FilteredUser,
	UserFriend,
	CreatedChatResponse,
};

// Utils
export {
	authInterceptor,
	codeRedirectionInterceptor,
	isAuthError,
	isAxiosError,
	redirectUnauthorizedUser,
	refreshInterceptor,
	refreshToken,
};
