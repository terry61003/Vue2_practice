//login page
const login = {
    template: '<div>Login Page<button v-on:click="login">GO</button></div>',
    methods: {
        login: function (){
            router.push({name:'mainIndex'});
        }
    },
    mounted: function (){}
};