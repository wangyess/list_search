;(function () {
    'use strict';

    var task_list;  //任务数据
    var last_id;    //id名数据
    init_data();

    //初始化本地数据
    function init_data() {
        //获取本地数据
        task_list = s.get('task_list');
        last_id = s.get('last_id');

        if (!task_list) {
            task_list = [];
            s.set('task_list', task_list);
        }
        if (!last_id) {
            last_id = 0;
            s.set('last_id', last_id);
        }
    }


})();