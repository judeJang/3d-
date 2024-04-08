export const getComponent = (view: string, depth?: string): any => {
	if (depth) {
		return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${depth}/${view}View.vue`);
	}
	return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}View.vue`);
}
