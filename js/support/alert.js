import {Vue_sup} from '../support';
import Vue from '../../lib/vue/vue';
//alert
const Alert = {
    template: 
    `<div class="pop alert animated bounce" id="alert_window">
        <div class="title">
            <div class="text" id="alert_title"></div>
            <div class="icon" v-on:click="close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
        <div class="content" id="alert_content"></div>
        <div class="footer">
            <div class="btn_group">
                <button class="confirm" id="alert_btn" v-on:click="close">OK</button>
            </div>
        </div>
     </div>`,
    methods: {
        close: function(){
            Vue_sup.Alert_sup.Hide();
        }
    },
    mounted: function (){}
};
Vue.component('alert', Alert);