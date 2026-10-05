import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/news',
			component: () => import('@/pages/News.vue')
		},
		{
			path: '/models',
			component: () => import('@/pages/Models.vue')
		},
		{
			path: '/series',
			component: () => import('@/pages/Series.vue')
		},
	],
});

export default router;
