const routers = [
    {
        path: '/',
        meta: {
            title: 'index'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/button',
        meta: {
            title: 'button'
        },
        component: (resolve) => require(['./views/button.vue'], resolve)
    },
    {
        path: '/grid',
        meta: {
            title: 'grid'
        },
        component: (resolve) => require(['./views/grid.vue'], resolve)
    },
    {
        path: '/layout',
        meta: {
            title: 'layout'
        },
        component: (resolve) => require(['./views/layout.vue'], resolve)
    },
    {
        path: '/form',
        meta: {
            title: 'form'
        },
        component: (resolve) => require(['./views/form.vue'], resolve)
    },
    {
        path: '/baseform',
        meta: {
            title: 'baseform'
        },
        component: (resolve) => require(['./views/baseform.vue'], resolve)
    }
];
export default routers;