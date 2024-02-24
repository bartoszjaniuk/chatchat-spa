import { debounce } from "lodash";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useQueryParams, StringParam } from "use-query-params";
import { z } from "zod";

export const SearchUserSchema = z.object({
	searchInput: z
		.string()
		.min(1, "Field is required")
		.email("Invalid email address"),
});

export type SearchUserFieldValues = z.infer<typeof SearchUserSchema>;

export const SearchInput = () => {
	const [query, setQuery] = useQueryParams({ "user.email": StringParam });
	const [inputValue, setInputValue] = useState<string>(
		query["user.email"] || "",
	);

	const handleQuery = useCallback(
		() => {
			if (!inputValue)
				return setQuery({
					...query,
					["user.email"]: inputValue || undefined,
				});

			return setQuery({ ...query, ["user.email"]: inputValue });
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[inputValue, query["user.email"], setQuery],
	);

	const ref = useRef(handleQuery);

	useEffect(() => {
		ref.current = handleQuery;
	}, [handleQuery, inputValue]);

	const debouncedCallback = useMemo(() => {
		const fn = () => {
			ref.current?.();
		};
		return debounce(fn, 1000);
	}, []);

	const handleSearchByIqamaOnChange = (inputValue: string) => {
		setInputValue(inputValue);
		debouncedCallback();
	};

	return (
		<form>
			<label
				htmlFor="default-search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only "
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 "
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					onChange={(e) => handleSearchByIqamaOnChange(e.target.value)}
					value={inputValue}
					className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
					placeholder="Search user by email"
					required
					id="searchInput"
				/>
			</div>
		</form>
	);
};
