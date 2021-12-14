import { createRouter, createWebHistory } from 'vue-router';

import { defineAsyncComponent } from 'vue';

// import RecordsDetail from '@/Pages/Records/RecordsDetail';
// import RecordsRegister from '@/Pages/Records/RecordsRegister';
// import ContactStore from '@/Pages/Requests/ContactStore';
// import RequestReceived from '@/Pages/Requests/RequestReceived';
// import UserAuth from '@/Pages/auth/UserAuth';
import RecordsList from '@/Pages/Records/RecordsList';
import NotFound from '@/Pages/NotFound';
import store from './store/index';

const RecordsDetail = defineAsyncComponent(() => import('@/Pages/Records/RecordsDetail'));
const RecordsRegister = defineAsyncComponent(() => import('@/Pages/Records/RecordsRegister'));
const ContactStore = defineAsyncComponent(() => import('@/Pages/Requests/ContactStore'));
const RequestReceived = defineAsyncComponent(() => import('@/Pages/Requests/RequestReceived'));
const UserAuth = defineAsyncComponent(() => import( '@/Pages/auth/UserAuth'));

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', redirect: '/records',
      component: RecordsList
    },
    {
      path: '/records',
      component: RecordsList
    },
    {
      path: '/records/:id',
      component: RecordsDetail,
      props: true,
      children: [
        { path: 'contactStore', component: ContactStore }  //records/r1/contact
      ]
    },
    {
      path: '/registerRecord',
      component: RecordsRegister,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: RequestReceived,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: { requiresUnauth: true }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
      //  (.*) no matter what was entered you will get the notFound route
    }


  ]
});

// Navigations Guards

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuth) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuth) {
    next('/records');
  } else {
    next();
  }
});

export default router;

