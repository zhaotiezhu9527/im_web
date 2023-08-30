import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia';

const piana = createPinia();

import App from './App.vue';
import api from '../src/config/api';
const app = createApp(App);
app.use(Antd);
app.use(piana);
app.config.globalProperties.$api = api;
app.mount('#app');

export { app };
