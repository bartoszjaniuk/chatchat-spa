import { useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "src/app/router";
import { useThreadsQuery } from "src/app/userThreads";

export const useThread = (currentUsername: string | undefined) => {
	const { data, isLoading } = useThreadsQuery();
	const navigate = useNavigate();
	const params = useParams();
	const chatId = params?.id ? Number(params.id) : undefined;

	const thread = useMemo(
		() => data?.find((thread) => thread.chatId === chatId),
		[chatId, data],
	);

	const threadTitle = `${thread?.users[0]} + ${thread?.users[1]}`;
	const recipient = thread?.users.filter(
		(username) => username !== currentUsername,
	);

	useEffect(() => {
		if (!isLoading && !thread) navigate(AppRoutes.HOME);
	}, [isLoading, navigate, thread]);

	return { isLoading, threadTitle, recipient };
};
