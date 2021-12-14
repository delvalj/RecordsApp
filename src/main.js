import { createApp, defineAsyncComponent } from 'vue';

import App from './App.vue';

import router from '@/routerr';
import store from '@/store/index.js';
import axios from 'axios';
import VueAxios from 'vue-axios';

import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge.vue';
import RequestsItem from '@/components/requests/RequestsItem';
import BaseSpinner from '@/components/ui/BaseSpinner';
// import BaseDialog from '@/components/ui/BaseDialog';

const BaseDialog = defineAsyncComponent(() => import('@/components/ui/BaseDialog'));

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);


app.component('base-card', BaseCard);
app.component('base-btn', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.component('requests-item', RequestsItem);

app.mount('#app');