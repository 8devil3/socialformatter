import './assets/app.css';
import { createSocialFormatterApp } from './app';

const { app, router } = createSocialFormatterApp(false);

await router.isReady();
app.mount('#app');
