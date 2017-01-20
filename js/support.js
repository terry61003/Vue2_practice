(function () {
    var ForEach = function (array, func) {
        [].forEach.call(array, function (item, i) {
                func(item, i);
            });
        },
        method = {
            Init: function (v) {
                // dom target
                this.target = v;
                // methods
                this.Check = method.check;
                this.Display = method.display;
                this.Html = method.html;
                this.SetAttr = method.setAttr;
                this.GetAttr = method.getAttr;
                this.RemoveAttr = method.removeAttr;
                this.GetVal = method.getVal;
                this.SetVal = method.setVal;
                this.AddClass = method.addClass;
                this.RemoveClass = method.removeClass;
                this.On = method.on;
                this.Off = method.off;

                return this;
            },
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
            removeAttr: function (a) {
                switch (this.target.length) {
                case 0:
                    console.log('XD removeAttr no target');
                    break;
                case 1:
                    this.target[0].removeAttribute(a);
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.removeAttribute(a);
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
            },
            on: function (e, func) {
                switch (this.target.length) {
                case 0:
                    console.log('XD On no target');
                    break;
                case 1:
                    this.target[0].addEventListener(e, func, false);
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.addEventListener(e, func, false);
                    });
                }
            },
            off: function () {
                switch (this.target.length) {
                case 0:
                    console.log('XD On no target');
                    break;
                case 1:
                    this.target[0].removeEventListener(e, func, false);
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.removeEventListener(e, func, false);
                    });
                }
            },
            check: function () {
                switch (this.target.length) {
                case 0:
                    return false;
                    break;
                case 1:
                    return true;
                    break;
                default:
                    return true;
                }
            },
            addClass: function (c) {
                switch (this.target.length) {
                case 0:
                    console.log('XD addClass no target');
                    break;
                case 1:
                    this.target[0].classList.add(c);
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.classList.add(c);
                    });
                }
                return this;
            },
            removeClass: function (c) {
                switch (this.target.length) {
                case 0:
                    console.log('XD addClass no target');
                    break;
                case 1:
                    this.target[0].classList.remove(c);
                    break;
                default:
                    ForEach(this.target, function (item) {
                        item.classList.remove(c);
                    });
                }
                return this;
            }
        },
        XD = function (v) {
            return new method.Init(document.querySelectorAll(v));
        },
        Alert_sup = {
            dom: {
                window: '#alert_window',
                title: '#alert_title',
                content: '#alert_content',
                btn: '#alert_btn',
                block: '#window_block',
                status: false
            },
            Show: function (title, content, status) {
                if (XD(this.dom.block).Check()) {
                    XD(this.dom.block).Display('block');
                }
                switch (status) {
                case 'tip':
                    XD(this.dom.window).AddClass('tip');
                    break;
                case 'error':
                    XD(this.dom.window).RemoveClass('tip');
                    break;
                default:
                    console.log('forget alert status');
                };
                XD(this.dom.title).Html(title);
                XD(this.dom.content).Html(content);
                XD(this.dom.window).Display('block');
                this.dom.status = true;
            },
            Hide: function () {
                if (XD(this.dom.block).Check()) {
                    XD(this.dom.block).RemoveAttr('style');
                }
                XD(this.dom.title).Html(null);
                XD(this.dom.content).Html(null);
                XD(this.dom.window).RemoveAttr('style');
                this.dom.status = false;
            }
        },
        left_menu_sup = {
            dom: {
                menu: '#left_menu',
                block: '#window_block',
                status: false
            },
            Show: function () {
                if (!this.dom.status) {
                    if (XD(this.dom.block).Check()) {
                        XD(this.dom.block).Display('block');
                    }
                    XD(this.dom.menu)
                        .AddClass('slideInLeft')
                        .Display('block');
                    this.dom.status = true;
                }
            },
            Hide: function () {
                if (this.dom.status) {
                    if (XD(this.dom.block).Check()) {
                        XD(this.dom.block).RemoveAttr('style');
                    }
                    XD(this.dom.menu)
                        .RemoveClass('slideInLeft')
                        .AddClass('slideOutLeft');
                    setTimeout(function () {
                        XD(left_menu_sup.dom.menu)
                            .RemoveClass('slideOutLeft')
                            .RemoveAttr('style');
                        left_menu_sup.dom.status = false;
                    }, 1000);
                }
            }
        };
    window.ForEach = ForEach;
    window.XD = XD;
    window.Alert_sup = Alert_sup;
    window.left_menu_sup = left_menu_sup;
}.call());