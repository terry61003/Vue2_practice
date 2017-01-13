//Router Set
const router = new VueRouter({
    routes: [
        { path: '/', redirect:'/login'},
        { path: '/main', component: mainBase,
         children: [{
             path: 'mainIndex',
             component: mainIndex,
             name: 'mainIndex'
         },{
             path: '*',
             redirect:'mainIndex'
         }]},
        { path: '/login', component: login ,name: 'login',
         children: [{
             path: '*', redirect:'/login'
         }]},
        { path: '/*', redirect:'/login'}
    ]
});