import { createApp } from 'vue';
import router from '@/routerr';

import store from '@/store/index.js';
import  App  from './App.vue';

const app = createApp(App)

app.use(router);

app.use(store);

app.mount('#app');