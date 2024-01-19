/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { useState } from "react";

type UseRequestProps = {
	apiAction: (props: unknown) => Promise<AxiosResponse>;
	dispatchAction?: (payload?: any) => void;
};

export const useRequest = ({ apiAction, dispatchAction }: UseRequestProps) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [payload, setPayload] = useState<unknown | void>();
	const [status, setStatus] = useState<number | void>();
	const request = async (props?: unknown) => {
		try {
			setLoading(true);
			const { data, status } = await apiAction(props);
			setPayload(data);
			setStatus(status);
			if (dispatchAction) {
				dispatchAction(data);
			}
			return data;
		} catch (error: unknown) {
			setPayload(undefined);
			setStatus(status || undefined);
			setError(true);
			return error;
		} finally {
			setLoading(false);
		}
	};

	return { loading, error, payload, status, request };
};
