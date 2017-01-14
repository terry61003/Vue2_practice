//login page
const login = {
    template: `<div class="page page_login animated zoomIn"">
        <div class="login_main">
            <div class="input_group">
                <input type="text" v-model="ac" placeholder="account" v-on:keyup.enter="focus_ps">
                <input type="password" v-model="ps" placeholder="password" v-on:keyup.enter="login">
            </div>
            <div class="btn_group">
                <button v-on:click="login">login</button>
            </div>
        </div>
        <alert></alert>
        <block></block>
     </div>`,
    data: function () {
        return {
            ac: null,
            ps: null
        }
    },
    methods: {
        login: function () {
            if (this.ac == 1 && this.ps == 1) {
                router.push({
                    name: 'index'
                });
            } else{
                var text = 'account:1<br>password:1';
                Alert_sup.Show('Alert Title', text);
            }
        },
        focus_ps: function(){
            document.querySelector('input[type="password"]').focus();
        }
    },
    mounted: function () {}
};