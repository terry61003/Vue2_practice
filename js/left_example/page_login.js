//login page
const login = {
    template: `<div class="page_login animated zoomIn"">
        <div class="login_main">
            <div class="input_group">
                <input type="text" v-model="ac" placeholder="account" v-on:keyup.enter="focus_ps">
                <input type="password" v-model="ps" placeholder="password" v-on:keyup.enter="login">
            </div>
            <div class="btn_group">
                <button v-on:click="login">login</button>
            </div>
        </div>
     </div>`,
    data: function () {
        return {
            ac: null,
            ps: null
        }
    },
    methods: {
        login: function () {
            var text;
            if (this.ac == 1 && this.ps == 1) {
                text = 'success';
                Alert_sup.Show('Alert Title', text, 'tip');
            } else{
                text = 'account:1<br>password:1';
                Alert_sup.Show('Alert Title', text, 'error');
            }
        },
        focus_ps: function(){
            document.querySelector('input[type="password"]').focus();
        }
    },
    mounted: function () {}
};