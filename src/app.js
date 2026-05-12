import { createApp, createSSRApp } from 'vue';
import App from './App.vue';
import { createAppRouter } from './router';
import { applyMeta } from './seo';

export const createSocialFormatterApp = (isServer = false) => {
    const hasPrerenderedHtml = !isServer && Boolean(document.getElementById('app')?.children.length);
    const app = isServer || hasPrerenderedHtml ? createSSRApp(App) : createApp(App);
    const router = createAppRouter(isServer);

    app.use(router);

    if (!isServer) {
        router.afterEach((to) => {
            applyMeta(to);
        });
    }

    return { app, router };
};
