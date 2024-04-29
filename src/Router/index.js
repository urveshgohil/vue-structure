import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/Layout/MainLayout.vue';
import AuthLayout from '@/Layout/AuthLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '/',
                    component: () => import('@/Views/Home/IndexComponent.vue'),
                    meta: {
                        title: 'Home'
                    }
                },
            ]
        },
        {
            path: '/',
            component: AuthLayout,
            children: [
                {
                    path: '/sign-in',
                    component: () => import('@/Views/SignIn/IndexComponent.vue'),
                    meta: {
                        title: 'Sign In'
                    }
                },
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vue Project';
    next();
});

export default router
