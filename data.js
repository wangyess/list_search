//首先我得定义一个往浏览器中存取数据的函数
;(function () {
    //这种方法会让数据更加安全  但是别的不能访问  所以我得暴露出一个可以访问的
    window.s={};
    //首先我的存数据 往浏览器内存中存   但是得用JSON的方式  这样在取数据的时候 取到的是原始值
    s.set=function (a,val) {
        val=JSON.stringify(val);
        return localStorage.setItem(a,val);
    };
    //我要从从内存中获取数据
    s.get=function (a) {
        let c=localStorage.getItem(a);
        return JSON.parse(c);
    }
})();






// //浏览器缓存
// ;(function () {
//     //暴露出这个对象 以便访问
//     window.s = {};
//     s.get = function (a) {
//         let sa = localStorage.getItem(a);
//         //把获取的值用JSON的方式取出
//         return JSON.parse(sa);
//     };
//     s.set = function (a, b) {
//         //传入的值得用JSON的方式进行转化
//         b = JSON.stringify(b);
//         return localStorage.setItem(a, b);
//     }
//
//
// })();

























