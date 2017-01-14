//Router Set
const router = new VueRouter({
    routes: [
        { path: '/', redirect:'/login'},
        { path: '/main', component: mainBase,
         children: [{
             path: 'index',
             component: index,
             name: 'index'
         },{
             path: '*',
             redirect:'index'
         }]},
        { path: '/login', component: login ,name: 'login',
         children: [{
             path: '*', redirect:'/login'
         }]},
        { path: '/*', redirect:'/login'}
    ]
});