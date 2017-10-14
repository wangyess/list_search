//浏览器储存
;(function () {
    window.person={};
    person.set=function (a,b) {
        return localStorage.setItem(a,JSON.stringify(b));
    };
    person.get=function (a) {
        return JSON.parse(localStorage.getItem(a));
    }
})();