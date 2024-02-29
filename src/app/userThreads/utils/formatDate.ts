export const formatDate = (inputDateString: string | null): string | null => {
	if (!inputDateString) return null;
	const inputDate = new Date(inputDateString);
	const today = new Date();

	if (inputDate.toDateString() === today.toDateString()) {
		return "today";
	}

	const yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 1);
	if (inputDate.toDateString() === yesterday.toDateString()) {
		return "yesterday";
	}

	const day = inputDate.getDate().toString().padStart(2, "0");
	const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
	const year = inputDate.getFullYear();

	return `${day}/${month}/${year}`;
};
