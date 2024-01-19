import type { AxiosError } from "axios";

type ExtendedAxiosError<T> = AxiosError<T> & {
	_retry: boolean;
};

export const isAxiosError = <T = unknown>(
	error: unknown,
): error is ExtendedAxiosError<T> => {
	if (!error) {
		return false;
	}

	return (error as AxiosError).isAxiosError;
};
