import {createRouter, createWebHistory} from 'vue-router';
import RecordsDetail from '@/Pages/Records/RecordsDetail';
import RecordsList from '@/Pages/Records/RecordsList';
import RecordsRegister from '@/Pages/Records/RecordsRegister';
import ContactStore from '@/Pages/Requests/ContactStore';
import RequestReceived from '@/Pages/Requests/RequestReceived';
import NotFound from '@/Pages/NotFound';

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
      children: [
        { path: 'contactStore' , component: ContactStore }  //records/r1/contact
      ]
    },
    {
      path: '/registerRecord',
      component: RecordsRegister
    },
    {
      path: '/requests',
      component: RequestReceived
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    //  (.*) no matter what was entered you will get the notFound route
    },


  ],
});

export default router;
