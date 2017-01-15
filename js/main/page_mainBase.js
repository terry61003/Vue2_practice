//Main page
const mainBase = {
    template: 
    `<div class="page page_main animated fadeIn">
        <div class="left_menu animated" id="left_menu">
            <ul>
                <li class="menu_group" v-for="(item, index) in menu">
                    <a class="main_menu" v-bind:type="index" v-on:click="main_menu_link">{{item.name}}</a>
                    <a class="sub_menu" v-on:click="sub_menu_link" v-bind:subType="index" v-bind="{ 'subType': index, 'href': subItem.href }" v-for="subItem in item.sub">
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
        <alert></alert>
        <block></block>
     </div>`,
    data: function(){
        return{
            menu: [
                {name: 'example', href: null,sub:[
                    {name:'login window', href: '#/login'}
                ]},
                {name: 'info', href: null,sub:[
                    {name:'author', href: null},
                ]},
                {name: 'thinking', href: null}
            ]
        };
    },
    methods: {
        show_menu: function(){
            console.log('開啟');
            left_menu_sup.Show();
        },
        main_menu_link: function(e){
            e.preventDefault();
            var href = e.target.getAttribute('href'),
                type = e.target.getAttribute('type');
            XD('#left_menu .main_menu').RemoveClass('active');
            XD('#left_menu .sub_menu')
                .RemoveClass('show')
                .RemoveClass('active');
            if(href){
                if(left_menu_sup.dom.status){
                    left_menu_sup.Hide();
                }
                router.push({
                    path: href
                });
            }else{
                e.target.classList.add('active');
                XD('#left_menu .sub_menu[subType="'+ type +'"]').AddClass('show');
            }
        },
        sub_menu_link: function(e){
            e.preventDefault();
            XD('#left_menu .sub_menu').RemoveClass('active');
            e.target.classList.add('active');
            var href = e.target.getAttribute('href');
            if(href){
                if(left_menu_sup.dom.status){
                    left_menu_sup.Hide();
                }
                router.push({
                    path: href.substring(2)
                });
            }
        }
    },
    mounted: function (){}
};