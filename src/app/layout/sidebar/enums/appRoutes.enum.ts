export enum Routes {
	HOME = "/",
}

export enum OtherRoutes {
	CHAPTER1 = "/add-post",
}

export const AppRoutes = { ...Routes, ...OtherRoutes };
