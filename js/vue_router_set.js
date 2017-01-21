(function () {
    Vue.use(VueRouter);
    //Router Set
    const router = new VueRouter({
        routes: [
            { path: '/', redirect:'/index'},
            { path: '/', component: mainBase,
             children: [{
                 path: 'authorInfo',
                 component: authorInfo,
                 name: 'authorInfo'
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
                 redirect:'authorInfo'
             }]}
        ]
    });
    window.router = router;
}.call());