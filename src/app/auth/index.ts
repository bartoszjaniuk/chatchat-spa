import { useLogout } from "./hooks/useLogout/useLogout";
import { useLogin } from "./hooks/useLogin/useLogin";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { LoginFormSchema } from "./models/loginFormSchema";
import { AuthStatus } from "./models/authStatus.model";
import { SessionPayload } from "./models/sessionPayload.model";
import { SessionQueryStatus } from "./models/sessionQueryStatus";
import { resolveAuthStatus } from "./utils/resolveAuthStatus";
import { PASSWORD_REGEX } from "./constants/passwordRegex";

export { Login, Register };

// Hooks
export { useLogin, useLogout };

// Models
export { LoginFormSchema };
export type { AuthStatus, SessionPayload, SessionQueryStatus };

// Utils
export { resolveAuthStatus };

// Constants
export { PASSWORD_REGEX };
