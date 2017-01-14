//Main page
const mainBase = {
    template: 
    `<div class="page page_main animated fadeIn">
        <div class="left_menu" id="left_menu">
            <ul>
                <li class="menu_group" v-for="item in menu">
                    <a class="main_menu">{{item.name}}</a>
                    <a class="sub_menu" v-for="subItem in item.sub">
                        {{subItem.name}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="sub_page">
            <div class="left_menu_icon" v-on:click="show_menu">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div class="page_title">Title</div>
            <router-view></router-view>
        </div>
        <block></block>
     </div>`,
    data: function(){
        return{
            menu: [
                {name: 'first',sub:[
                    {name:'sub-fisrt'}
                ]},
                {name: 'second',sub:[
                    {name:'sub-fisrt'},
                    {name:'sub-second'}
                ]},
                {name: 'third'}
            ]
        };
    },
    methods: {
        show_menu: function(){
            left_menu_sup.Show();
        }
    },
    mounted: function (){}
};