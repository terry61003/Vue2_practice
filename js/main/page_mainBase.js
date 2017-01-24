import {XD,Vue_sup} from '../support';
import {router} from '../vue_router_set';
//Main page
export const mainBase = {
    template: 
    `<div class="page page_main animated fadeIn">
        <div class="left_menu animated" id="left_menu">
            <ul>
                <li class="menu_group" v-for="(item, index) in menu">
                    <a class="main_menu" v-bind="{ 'type': index, 'href': item.href }" v-on:click="main_menu_link">{{item.name}}</a>
                    <a class="sub_menu" v-for="(subItem, subIndex) in item.sub" v-on:click="sub_menu_link" v-bind="{ 'type': index, 'href': subItem.href, 'subType': subIndex }">
                    {{subItem.name}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="sub_page">
            <div class="left_menu_icon" v-on:click="show_menu">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div class="page_title">{{pageTitle}}</div>
            <router-view></router-view>
        </div>
        <alert></alert>
        <block></block>
    </div>`,
    data: function () {
        return {
            menu: [
                {
                    name: 'example',
                    href: null,
                    sub: [{
                        name: 'login window',
                        href: '#/login'
                     }, {
                        name: 'upload img',
                        href: '#/uploadImg'
                     }, {
                        name: 'carousel',
                        href: '#/carousel'
                     }]
                    },
                {
                    name: 'info',
                    href: null,
                    sub: [{
                        name: 'author',
                        href: '#/authorInfo'
                     }]
                    },
                {
                    name: 'thinking',
                    href: '#/authorInfo'
                }
                ],
            pageTitle: this.$route.path.substring(1)
        };
    },
    methods: {
        show_menu: function () {
            Vue_sup.left_menu_sup.Show();
        },
        main_menu_link: function (e) {
            e.preventDefault();
            var href = e.target.getAttribute('href'),
                type = e.target.getAttribute('type');
            XD('#left_menu .main_menu').RemoveClass('active');
            XD('#left_menu .sub_menu')
                .RemoveClass('show')
                .RemoveClass('active');
            e.target.classList.add('active');
            if (href) {
                if (Vue_sup.left_menu_sup.dom.status) {
                    Vue_sup.left_menu_sup.Hide();
                }
                this.pageTitle = href.substring(2);
                router.push({
                    path: href.substring(2)
                });
            } else {
                XD('#left_menu .sub_menu[type="' + type + '"]').AddClass('show');
            }
        },
        sub_menu_link: function (e) {
            e.preventDefault();
            XD('#left_menu .sub_menu').RemoveClass('active');
            e.target.classList.add('active');
            var href = e.target.getAttribute('href'),
                type = e.target.getAttribute('type'),
                subType = e.target.getAttribute('subType');
            if (href) {
                if (Vue_sup.left_menu_sup.dom.status) {
                    Vue_sup.left_menu_sup.Hide();
                }
                this.pageTitle = this.menu[type].sub[subType].name;
                router.push({
                    path: href.substring(2)
                });
            }
        }
    },
    mounted: function () {}
};