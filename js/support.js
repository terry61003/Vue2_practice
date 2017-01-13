(function () {
    var ForEach = function (array, func) {
        [].forEach.call(array, function (item, i) {
                func(item, i);
            });
        },
        method = {
            display: function (d) {
                switch (this.target.length) {
                case 0:
                    console.log('XD display no target');
                    break;
                case 1:
                    this.target[0].style.display = d;
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.style.display = d;
                    });
                }
                return this;
            },
            html: function (t) {
                switch (this.target.length) {
                case 0:
                    console.log('XD html no target');
                    break;
                case 1:
                    this.target[0].innerHTML = t;
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.innerHTML = t;
                    });
                }
                return this;
            },
            setAttr: function (a, v) {
                switch (this.target.length) {
                case 0:
                    console.log('XD setAttr no target');
                    break;
                case 1:
                    this.target[0].setAttribute(a, v);
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.setAttribute(a, v);
                    });
                }
                return this;
            },
            getAttr: function (a) {
                switch (this.target.length) {
                case 0:
                    console.log('XD getAttr no target');
                    break;
                case 1:
                    var attr = this.target[0].getAttribute(a);
                    break;
                default:
                    var attr = [];
                    ForEach(this.target, function (item) {
                        val.push(item.getAttribute(a));
                    });
                }
                return attr;
            },
            setVal: function (v) {
                switch (this.target.length) {
                case 0:
                    console.log('XD setVal no target');
                    break;
                case 1:
                    this.target[0].value = v;
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.value = v;
                    });
                }
                return this;
            },
            getVal: function (v) {
                switch (this.target.length) {
                case 0:
                    console.log('XD getVal no target');
                    break;
                case 1:
                    var val = this.target[0].value;
                    break;
                default:
                    var val = [];
                    ForEach(this.target, function (item) {
                        val.push(item.value);
                    });
                }
                return val;
            }
        },
        XD = function (v) {
            // dom target
            this.target = document.querySelectorAll(v);
            // methods
            this.Display = method.display;
            this.Html = method.html;
            this.SetAttr = method.setAttr;
            this.GetAttr = method.getAttr;
            this.GetVal = method.getVal;
            this.SetVal = method.setVal;

            return this;
        },
        Alert_window = {
            dom: {
                window: '#alert_window',
                title: '#alert_title',
                content: '#alert_content',
                btn: '#alert_btn'
            },
            Show: function (title,content) {
                XD(Alert_window.dom.title).Html(title);
                XD(Alert_window.dom.content).Html(content);
                XD(Alert_window.dom.window).Display('block');
            },
            Hide: function () {
                XD(Alert_window.dom.title).Html(null);
                XD(Alert_window.dom.content).Html(null);
                XD(Alert_window.dom.window).Display('none');
            }
        };
    this.ForEach = ForEach;
    this.XD = XD;
    this.Alert_window = Alert_window;
}).call();