import Layouts from '../../views/layouts/index.vue'

console.log('ss-----',Layouts)
export const staticRouter = [
    {
        path: '/',
        name: 'Home',
        component:() => import(/* webpackChunkName: "about" */ '../../views/layouts/index.vue'),
        redirect: "about",
        meta:{ title: "OTC商户管理",},
        children: [
            {
                name:'about-a',
                path: "/about",
                component: () => import(/* webpackChunkName: "about" */ '../../views/About.vue'),
                meta:{ title: "商户帐号",},
            },
            {
                name:'Home1',
                path: "/Home",
                component: () => import(/* webpackChunkName: "about" */ '../../views/Home.vue'),
                meta:{ title: "商户资产",},
            }
        ]
    },
    {
        path: '/enterprise',
        name: 'enterprise',
        component:() => import(/* webpackChunkName: "about" */ '../../views/layouts/index.vue'),
        redirect: "about",
        meta:{ title: "企业平台",},
        children: [
            {
                name:'enterprise-management',
                path: "/enterprise/management",
                component: () => import(/* webpackChunkName: "about" */ '../../views/enterprise/management.vue'),
                meta:{ title: "企业管理",},
            },
            {
                name:'enterprise-assets',
                path: "/enterprise/assets",
                component: () => import(/* webpackChunkName: "about" */ '../../views/enterprise/assets.vue'),
                meta:{ title: "企业资产",},
            },{
                name:'enterprise-transactionOrder',
                path: "/enterprise/transactionOrder",
                component: () => import(/* webpackChunkName: "about" */ '../../views/enterprise/transactionOrder.vue'),
                meta:{ title: "企业交易订单",},
            },{
                name:'enterprise-withdrawOrder',
                path: "/enterprise/withdrawOrder",
                component: () => import(/* webpackChunkName: "about" */ '../../views/enterprise/withdrawOrder.vue'),
                meta:{ title: "提现订单",},
            }
        ]
    }
]
