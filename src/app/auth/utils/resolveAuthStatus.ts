import { AuthStatus } from "../models";
import { SessionPayload } from "../models/sessionPayload.model";

export const resolveAuthStatus = (
	session: SessionPayload | undefined,
	sessionQueryStatus: "success" | "error" | "pending",
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
