//block
const Block = {
    template: 
    `<div class="page window_block" id="window_block" v-on:click="close"></div>`,
    methods: {
        close: function(){
            if(Alert_sup.dom.status){
                Alert_sup.Hide();
            }
            if(left_menu_sup.dom.status){
                left_menu_sup.Hide();
            }
        }
    },
    mounted: function (){}
};
Vue.component('block', Block);