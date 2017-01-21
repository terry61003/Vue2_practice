//block
const Block = {
    template: 
    `<div class="page window_block" id="window_block" v-on:click="close"></div>`,
    methods: {
        close: function(){
            if(Vue_sup.Alert_sup.dom.status){
                Vue_sup.Alert_sup.Hide();
            }
            if(Vue_sup.left_menu_sup.dom.status){
                Vue_sup.left_menu_sup.Hide();
            }
        }
    },
    mounted: function (){}
};
Vue.component('block', Block);