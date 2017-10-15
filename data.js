//浏览器储存
;(function () {
    window.s = {};
    s.get = function (a) {
        var sa = localStorage.getItem(a);
        //用JSON的方式把数据的类型转化回来
        return JSON.parse(sa);
    };
    s.set = function (a, b) {
        //用JSON的方式转换数据的类型
        b = JSON.stringify(b);
        return localStorage.setItem(a, b);
    }
})();