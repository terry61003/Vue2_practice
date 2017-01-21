(function () {
    Vue.use(VueRouter);
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
                 path: 'uploadImg',
                 component: uploadImg,
                 name: 'uploadImg'
             },{
                 path: '*',
                 redirect:'index'
             }]}
        ]
    });
    window.router = router;
}.call());