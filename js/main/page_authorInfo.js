import {XD} from '../support';
//Index page
export const authorInfo = {
    template: 
    `<div class="page_author_info animated zoomIn">
        <div class="img">
            <img src="img/author.png">
        </div>
        <ul class="info">
            <li v-for="item in info">
                <span class="thing">{{item.thing}}：</span>
                <span class="content">{{item.content}}</span>
            </li>
            <li>
                <span class="thing">Email：</span>
                <span class="content"><a href="mailto:flamma0917@gamil.com" target="_blank">flamma0917@gamil.com</a></span>
            </li>
        </ul>
    </div>`,
    data: function () {
        return {
            info: [
                {
                    thing: 'Name',
                    content: 'Ken'
                },
                {
                    thing: 'Title',
                    content: 'Junior Front-End-Developer'
                },
                {
                    thing: 'Skill',
                    content: 'HTML & CSS & Javascript'
                },
                {
                    thing: 'Learning',
                    content: 'Vue2 & webpack'
                }
                ]
        }
    },
    methods: {},
    mounted: function () {}
};