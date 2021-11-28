import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

import { publicPath } from '../vue.config';

console.log(publicPath);
const router = createRouter({
    base: publicPath,
    history: createWebHistory(),
    routes: [{
            path: publicPath,
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            component: CoachesList
        },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [{
                path: 'contact',
                component: ContactCoach
            }, ]
        },
        {
            path: '/register',
            component: CoachRegistration
        },
        {
            path: '/requests',
            component: RequestsReceived
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

export default router;