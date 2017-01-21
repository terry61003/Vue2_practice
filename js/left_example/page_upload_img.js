(function () {
    //login page
    const uploadImg = {
        template: 
        `<div class="page_upload_img animated zoomIn">
            <div class="img" v-show="showImg">
                <img v-bind:src="img">
            </div>
            <div class="upload_block">
                <input type="file" accept="image/*" v-on:change="show_img">
                <span>Upload Image</span>
            </div>
        </div>`,
        data: function () {
            return {
                img: null,
                showImg: false
            }
        },
        methods: {
            show_img: function(e){
                var reader = new FileReader(),
                    file = e.target.files[0],
                    self = this,
                    img = document.createElement('img');
                reader.onload = function () {
                    img.onload = function () {
                        self.img = Vue_sup.img_rotate(img,300);
                        self.showImg = true;
                    };
                    img.src = reader.result;
                };
                if (file && file.type.match('image.*')) {
                    reader.readAsDataURL(file);
                }else{
                    this.showImg = false;
                }
            }
        },
        mounted: function () {}
    };
    window.uploadImg = uploadImg;
}.call());