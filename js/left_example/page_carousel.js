import {XD,Vue_sup} from '../support';
//carousel
export const carousel = {
    template: 
    `<div class="page_upload_img page_carousel animated zoomIn">
        <div class="img" v-show="showCarousel">
            <img v-for="item in carouselImg" v-show="item.show" v-bind="{ 'src': item.src, 'class': item.class }">
            <div class="carousel_count">
                <div v-bind:class="['count', { active: item.show}]" v-for="item in carouselImg"></div>
            </div>
        </div>
        <div class="upload_block">
            <input type="file" accept="image/*" v-on:change="show_img">
            <span>Upload Image</span>
        </div>
    </div>`,
    data: function () {
        return {
            carouselImg: [],
            showCarousel: false,
            carouselIndex: 0,
            carouselMax: 0
        }
    },
    methods: {
        show_img: function (e) {
            if (this.carouselImg.length < 6) {
                var reader = new FileReader(),
                    file = e.target.files[0],
                    self = this,
                    img = document.createElement('img');
                reader.onload = function () {
                    img.onload = function () {
                        if (self.carouselImg.length === 0) {
                            self.carouselImg.push({
                                src: Vue_sup.img_rotate(img, 300),
                                show: true,
                                class: 'animated slideInRight'
                            });
                        } else {
                            self.carouselImg.push({
                                src: Vue_sup.img_rotate(img, 300),
                                show: false,
                                class: 'animated slideInRight'
                            });
                        }
                        self.carouselMax += 1;
                        self.showCarousel = true;
                    };
                    img.src = reader.result;
                };
                if (file && file.type.match('image.*')) {
                    reader.readAsDataURL(file);
                }
            } else {
                Vue_sup.Alert_sup.Show('Alert', 'the maximum of image is 6.')
            }

        }
    },
    watch: {
        carouselMax: function () {
            var self = this;
            if (this.carouselMax === 2) {
                setInterval(function () {
                    if (self.carouselIndex < self.carouselMax - 1) {
                        self.carouselImg[self.carouselIndex].show = false;
                        self.carouselIndex += 1;
                        self.carouselImg[self.carouselIndex].show = true;
                    } else {
                        self.carouselImg[self.carouselIndex].show = false;
                        self.carouselIndex = 0;
                        self.carouselImg[self.carouselIndex].show = true;
                    }
                }, 3000);
            }
        }
    }
};