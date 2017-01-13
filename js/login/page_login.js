//login page
const login = {
    template: 
    `<div class="page page_login animated zoomIn"">
        <div class="login_main">
            <div class="input_group">
                <input type="text" placeholder="account">
                <input type="password" placeholder="password">
            </div>
            <div class="btn_group">
                <button v-on:click="login">login</button>
            </div>
        </div>
     </div>`,
    methods: {
        login: function (){
            router.push({name:'mainIndex'});
        }
    },
    mounted: function (){}
};