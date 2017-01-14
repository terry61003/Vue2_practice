//Router Set
const router = new VueRouter({
    routes: [
        { path: '/', redirect:'/index'},
        { path: '/', component: mainBase,
         children: [{
             path: 'index',
             component: index,
             name: 'index'
         },{
             path: 'login',
             component: login,
             name: 'login'
         },{
             path: '*',
             redirect:'index'
         }]}
    ]
});