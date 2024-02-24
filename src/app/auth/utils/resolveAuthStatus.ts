import { AuthStatus } from "..";
import { SessionPayload } from "../models/sessionPayload.model";
import { SessionQueryStatus } from "../models/sessionQueryStatus";

export const resolveAuthStatus = (
	session: SessionPayload | undefined,
	sessionQueryStatus: SessionQueryStatus,
): AuthStatus => {
	if (sessionQueryStatus === "pending") {
		return "loading";
	}
	if (sessionQueryStatus === "success") {
		return "authorized";
	}
	if (sessionQueryStatus === "error" || !session) {
		return "unauthorized";
	}
	return "idle";
};
