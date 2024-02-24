import { Thread } from "../userThreads/components/thread/Thread";
import { useThreadsQuery } from "./hooks/useThreadsQuery";

export const UserThreads = () => {
	const { data, isLoading } = useThreadsQuery();

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="p-4">
			{!data?.length && <div>You don't have any threads</div>}
			{data?.map((thread) => (
				<Thread key={thread.id} {...thread} />
			))}
		</div>
	);
};
