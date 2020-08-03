
import Layouts from '../../views/layouts/index.vue'

console.log('ss-----',Layouts)
export const staticRouter = [
    {
        path: '/',
        name: 'Home',
        component:() => import(/* webpackChunkName: "about" */ '../../views/layouts/index.vue'),
        redirect: "home",
        children: [
            {
                name:'home-a',
                path: "/home",
                component: () => import(/* webpackChunkName: "about" */ '../../views/home/index.vue'),
                meta:{ title: "首页",icon:'el-icon-help'},
            },

        ]
    },
    {
        path: '/external-link',
        name: 'external-link',
        component:() => import(/* webpackChunkName: "about" */ '../../views/layouts/index.vue'),
        redirect: "home",
        children: [
            {
                name:'external-link',
                path: "https://github.com/zouzhibin/ts-vue-element-admin",
                meta:{ title: "外链",icon:'el-icon-edit-outline'},
            },

        ]
    },
    {
        path: '/components',
        name: 'components',
        redirect: "/components/management",
        component:() => import(/* webpackChunkName: "about" */ '../../views/layouts/index.vue'),
        meta:{ title: "组件",icon:'el-icon-s-grid'},
        children: [
            {
                name:'components-management',
                path: "/components/management",
                component: () => import(/* webpackChunkName: "about" */ '../../views/components/management.vue'),
                meta:{ title: "表格"},
            },
            {
                name:'components-form',
                path: "/components/form",
                component: () => import(/* webpackChunkName: "about" */ '../../views/components/form.vue'),
                meta:{ title: "表单"},
            },
            {
                name:'components-progress',
                path: "/components/progress",
                component: () => import(/* webpackChunkName: "about" */ '../../views/components/progress.vue'),
                meta:{ title: "进度条"},
            },
            {
                name:'components-carousel',
                path: "/components/carousel",
                component: () => import(/* webpackChunkName: "about" */ '../../views/components/carousel.vue'),
                meta:{ title: "轮播图"},
            },
        
        ]
    },
    // {
    //     path: '/external-link',
    //     name: 'external-link',
    //     component:() => import(/* webpackChunkName: "about" */ '../../views/layouts/index.vue'),
    //     redirect: "home",
    //     children: [
    //         {
    //             name:'external-link',
    //             path: "https://github.com/zouzhibin/ts-vue-element-admin",
    //             meta:{ title: "打赏",icon:'el-icon-edit-outline'},
    //         },

    //     ]
    // },
]
