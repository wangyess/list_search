;(function () {
    'use strict';

    //......................................获取页面上的元素.........................................
    var list_form = document.getElementById('list_form');
    var list_div = document.getElementById('list_div');
    var search = document.getElementById('search');
    var reset = document.getElementById('reset');
    var list_w_div = document.getElementById('list_w_div');

    //...........................................监听全局..........................................
    init();

    function init() {
        //渲染
        render();
        //添加
        sub_mit();
        //查找
        search_want();
        //重置
        resetting();
    }

    //.........................................获取输入的对象........................................
    function get_input() {
        var data = {};
        var input_list = list_form.children;
        for (var i = 0; i < input_list.length; i++) {
            var input = input_list[i];
            var key = input.getAttribute('name');
            var val = input.value;
            input.value = '';
            data[key] = val;
        }
        return data;
    }

    //................................................添加事件...........................................
    function sub_mit() {
        list_form.addEventListener('submit', function (e) {
            e.preventDefault();
            var input_list_item = get_input();
            if (input_list_item.id) {
                input_list_item.id = parseInt(input_list_item.id);
                b.updata_item(input_list_item.id, input_list_item);
            }
            else {
                b.add(input_list_item);
            }

            render();
        })
    }

    //................................................删除事件......................................
    function bind_click(del, id) {
        del.addEventListener('click', function () {
            var n = parseInt(id);
            b.del(n);
            render();
        })
    }

    //.................................................编辑事件........................................
    function bind_edit(item, id) {
        var m = parseInt(id);
        item.addEventListener('click', function () {
            var item_list = b.read(m);
            var val = item_list.title;
            var id_1 = item_list.id;
            var iy_1 = item_list.complete;
            var input = list_form.querySelector('[name=title]');
            var inp = list_form.querySelector('[name=id]');
            var iy = list_form.querySelector('[name=complete]');
            input.value = val;
            inp.value = id_1;
            iy.value = iy_1;
        })
    }

    //..................................................查找.............................................
    function search_want() {
        search.addEventListener('click', function () {
            var list_1_1 = get_input();
            var list_title = list_1_1.title;
            var list_i_tem = b.read_1(list_title);

            render(list_i_tem);
        })
    }

    //..................................................重置...............................................
    function resetting() {
        reset.addEventListener('click', function () {
            render();
        })
    }

    //................................................任务完成事件...........................................
    function gg_lou(gou_xuan, id) {
        gou_xuan.addEventListener('click', function () {
            id = parseInt(id);
            var item = b.read(id);
            if (item.complete === "false") {
                item.complete = 'true';
                b.updata_item(id, item);

                render();
                return;
            }
            if (item.complete === 'true') {
                item.complete = 'false';
                b.updata_item(id, item);
                render();
            }
        })
    }

    //................................................渲染整个页面...........................................
    function render(a) {
        var comment;
        list_div.innerHTML = '';
        list_w_div.innerHTML = '';
        var list_data = b.read();
        if (a) {
            comment = a;
        } else {
            comment = list_data
        }
        var del_item;
        var up_item;
        var gou_xuan;
        var label_1;
        var time_style;
        var title_style;
        comment.forEach(function (list_item) {
            var mydiv = document.createElement('div');
            mydiv.classList.add('one');
            mydiv.classList.add('clear');
            mydiv.innerHTML = `
               <span> ${list_item.id}</span>
               <label for="check_${list_item.id}"></label>
               <input type="checkbox" name="oo" id="check_${list_item.id}">
               <span id="title_${list_item.id}">${list_item.title}</span>
               <span id="time_${list_item.id}">${list_item.time__t}</span>
               <span id="del_btn_${list_item.id}" class="fa fa-trash">删除</span>
               <span id="btn_${list_item.id}" class="fa fa-edit">编辑</span>
        `;
            //判断渲染到什么位置
            if (list_item.complete === "false") {
                list_div.appendChild(mydiv);
            }
            else {
                list_w_div.appendChild(mydiv);
            }

            //title 样式
            title_style=document.querySelector('#title_'+list_item.id);
            title_style.classList.add('title_style1');

            //time 样式
            time_style=document.querySelector('#time_'+list_item.id);
            time_style.classList.add('time_style1');

            //label
            label_1 = document.querySelector('[for=check_' + list_item.id + ']');
            label_1.classList.add('label_1');

            //复选框点击事件
            gou_xuan = document.querySelector('#check_' + list_item.id);
            gou_xuan.classList.add('gou-xuan');
            gg_lou(gou_xuan, list_item.id);

            //删除
            del_item = document.querySelector('#del_btn_' + list_item.id);
            del_item.classList.add('del_style');
            bind_click(del_item, list_item.id);

            //修改
            up_item = document.querySelector('#btn_' + list_item.id);
            up_item.classList.add('up_style');
            bind_edit(up_item, list_item.id);
        })
    }

    function render_1(a) {
        var comment;
        list_w_div.innerHTML = '';
        var list_data = b.read();
        if (a) {
            comment = a;
        } else {
            comment = list_data
        }
        var del_item;
        var up_item;
        var gou_xuan;
        comment.forEach(function (list_item) {
            var mydiv = document.createElement('div');
            mydiv.classList.add('one');
            mydiv.classList.add('clear');
            mydiv.innerHTML = `
               <span> ${list_item.id}</span>
               <input type="checkbox" name="oo" id="check_${list_item.id}">
               <span style="padding-left: 20px">${list_item.title}</span>
               <span id="del_btn_${list_item.id}" class="fa fa-trash">删除</span>
               <span id="btn_${list_item.id}" class="fa fa-edit">编辑</span>
        `;
            list_w_div.appendChild(mydiv);

            gou_xuan = document.querySelector('#check_' + list_item.id);
            gou_xuan.classList.add('gou-xuan');
            gg_lou(gou_xuan, list_item.id);

            del_item = document.querySelector('#del_btn_' + list_item.id);
            console.log(del_item);
            del_item.classList.add('del_style');
            bind_click(del_item, list_item.id);

            up_item = document.querySelector('#btn_' + list_item.id);
            up_item.classList.add('up_style');
            bind_edit(up_item, list_item.id);
        })
    }


})();