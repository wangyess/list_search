;(function () {
    //定义两个数据  一个是输入的任务数据  一个是id
    let task_list,last_id;
    //初始化一下  防止开始时候 他们的数据值为null 这样会报错
    init_data();
    function init_data() {
        task_list=s.get('task_list');
        last_id=s.get('last_id');
        //判断一下  如果为空 我们就给重新赋值  之后再把它更新到内存中
        //如果task_list没有值 就为他赋值
        if(!task_list){
            task_list=[];
            //再把它更新到数据中
            updata_task();
        }
        if(!last_id){
            last_id=0;
            //更新下内存中的数据
            updata_id();
        }
    }
   add('花姐');
    //添加增加功能  增加功能需要传入用户输入的
    function add(title,completed) {
        //定义一个新的对象去把用户输入的封装到里面  在推给数据列表
        let new_task={
            title:title,
            //id需要从内存中获取 在加一 就是新增这条信息的ID
            id: s.get('last_id')+1,
            completed:completed,
        };
        //更新内存中的ID
        s.set('last_id',last_id+1);
        //把这条推到数据列表中
        task_list.push(new_task);
        //增加一条 所以要更新下内存中的数据
        updata_task();
    }
     del(1);
    //增加一个删除的功能
    //删除功能需要找到删除那条的ID的索引  所以先找到 要删除那条ID 的索引
    function search_id_index(id) {
        //这个方法是自动遍历这个数组的每一条  返回匹配成功 信息的索引
       return task_list.findIndex(function (item) {
            //添加判断条件
            if(item.id===id){
                return true;
            }
        })
    }
    //删除功能
    function del(id) {
        //d定义一个变量去接受索引
        let id_index= search_id_index(id);
        //有了索引现在写删除功能
        //这里还需要判断一下  如果没找到给定的ID  上边会返回索引为-1  这样下面splice  就会执行从数组最后面开始删除一个
        if(id_index!==-1){
            task_list.splice(id_index,1);
        }
        //删除后还要更新一下内存中的数据
        updata_task();
    }
    xiu_gai(1,'这样吧');
   //修改一条内容  也要先找的他的ID
    function xiu_gai(id,content) {
        task_list.findIndex(function (item) {
            if(item.id===id){
                item.title =content;
            }
            updata_task();
        });
    }
    see_task('花');
    //查看  获取他的输入内容
    function see_task(keyword) {
        task_list.findIndex(function (item) {
            if(item.title.indexOf(keyword)!==-1){
                console.log(item);
            }
        });
    }

    //更新内存中的数据
    function updata_task() {
        s.set('task_list',task_list);
    }
    //更新内存中的id数据
    function updata_id() {
        s.set('last_id',last_id);
    }

})();



// ;(function () {
//     'use strict';
//     //定义两个数据  一个是任务数据  一个是ID数据
//     let task_list, last_id;
//     init_data();
//
//     //对数据进行初始化  把数据都变为[] 0
//     function init_data() {
//         //先获取内存中任务数据 和id数据
//         task_list = s.get('task_list');
//         last_id = s.get('last_id');
//         //对数据进行判断 如果内存中没有数据  则把数据赋值[] 0
//         if (!task_list) {
//             task_list = [];
//             s.set('task_list', task_list);
//         }
//         if (!last_id) {
//             last_id = 0;
//             s.set('last_id', last_id);
//         }
//     }
//     // add('小明星',true);
//     //增加数据
//     function add(title,complete) {
//         //判断任务是否完成
//         complete=complete || false;
//         //新建一个任务对象  把输入的放进去
//         let new_task={
//             title:title,
//             id:s.get('last_id')+1,
//             complete:complete,
//         };
//         //把新增的任务放入你的任务列表中
//         task_list.push(new_task);
//         //在把更新浏览器的缓存  也就是把他存储到你的数据库中 更新浏览器缓存中的 last_id 和task_list
//         up_task();
//         up_id();
//     }
//      del(1);
//     //删除一条数据
//   function search_id_index(id) {
//      return task_list.findIndex(function (item) {
//           if(item.id===id){
//               return true;
//           }
//       });
//   }
//   function del(id) {
//       let id_index= search_id_index(id);
//       if(id_index!==-1){
//           task_list.splice(id_index,1);
//           up_task()
//       }
//   }
//
//     //更新内存中的task_list
//     function up_task() {
//         s.set('task_list',task_list);
//     }
//     //更新内存中的last_id
//     function up_id() {
//         last_id=s.get('last_id')+1;
//         s.set('last_id',last_id);
//     }
//
//
//
// })();
//
//
//
//
//





















