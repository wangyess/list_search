;(function () {
    'use strict';
    var list_data, last_id;

    //......................................把功能暴露出去...............................
    window.b = {
        last_id: last_id,
        list_data: list_data,
        add: add,
        del: del,
        updata_item: updata_item,
        read: read,
        read_1: read_1,
    };
    //.......................................初始化.....................................
    init();

    function init() {
        list_data = s.get('list_data');
        last_id = s.get('last_id');
        if (!list_data) {
            list_data = [];
            up_list_data();
        }
        if (!last_id) {
            last_id = 0;
            s.set('last_id', last_id);
        }
    }

    //.......................................添加功能......................................
    function add(list_item) {
        list_data.push(list_item);
        list_item.id = parseInt(s.get('last_id') + 1);
        list_item.complete='false';
        up_list_data();
        up_last_id();
    }

    //........................................删除........................................
    function del(id) {
        var del_index = search_index(id);
        if (del_index !== -1) {
            list_data.splice(del_index, 1);
            up_list_data();
        }
    }

    //........................................修改........................................
    function updata_item(id, pack) {
        var k = parseInt(id);
        var this_index = search_index(k);
        if (this_index !== -1) {
            var list_item = list_data[this_index];
            list_item.id = k;
            list_data[this_index] = Object.assign({}, list_item, pack);
        }
        up_list_data();
    }

    //........................................查找想要的....................................
    function read_1(keyword) {
        var a=[];
       list_data.forEach(function (item) {
            if (item.title.indexOf(keyword) !== -1) {
                a.push(item);
            }
        });
        return a;
    }

    //.........................................查找........................................
    function read(id) {
        if (id) {
            id = parseInt(id);
            var tt = find_item(id);
            return tt;
        }
        return list_data;
    }

    //........................................查找对象......................................
    function find_item(id) {
        return list_data.find(function (item) {
            if (item.id === id) {
                return true;
            }
        })
    }

    //........................................查找索引......................................
    function search_index(id) {
        return list_data.findIndex(function (item) {
            if (item.id === id) {
                return true;
            }
        })
    }

    //........................................辅助功能.....................................
    function up_list_data() {
        s.set('list_data', list_data);
    }

    function up_last_id() {
        var last_id = s.get('last_id');
        s.set('last_id', last_id + 1);
    }
})();