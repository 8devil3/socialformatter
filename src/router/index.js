import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { pages, siteUrl } from '../content/pages';

export const routes = pages.map((page) => ({
    path: page.path,
    name: page.key,
    component: HomeView,
    meta: {
        title: page.title,
        description: page.description,
        canonical: `${siteUrl}${page.path === '/' ? '' : page.path}`,
        pageKey: page.key,
    },
}));

export const createAppRouter = (isServer = false) => createRouter({
    history: isServer ? createMemoryHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL),
    routes,
});
