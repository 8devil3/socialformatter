import { renderToString } from '@vue/server-renderer';
import { createSocialFormatterApp } from './app';
import { getPageByPath } from './content/pages';
import { createHeadTags } from './seo';

export const render = async (url) => {
    const { app, router } = createSocialFormatterApp(true);

    await router.push(url);
    await router.isReady();

    const html = await renderToString(app);
    const page = getPageByPath(url);

    return {
        html,
        head: createHeadTags(page),
    };
};
