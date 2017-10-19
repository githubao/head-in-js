/**
 * Created by BaoQiang on 2017/10/19.
 */

// 变量的类型
step1 = function () {
//    js 变量的类型 number,bool,string,object,null,undefined
    const arr = [];
    const obj = {};

    console.log(arr instanceof Array);
    console.log(arr instanceof Number);
    console.log(null instanceof Object);
    console.log(typeof null);

//    true false false object
//    null 不是object类型的实例，但是typeof 返回true
};

// null 和 undefined
step2 = function () {
    let v;
    if (typeof v === 'undefined') {
        console.log('v is undefined')
    }
//    上面代码返回true

    a = undefined;
    b = null;

    console.log(typeof a);
    console.log(typeof b);

    console.log(Number(a));
    console.log(Number(b));
    /*
     * undefined
     object
     NaN
     0
     * */

//    b表示值的状态没有，undefined表示未被定义，比如取对象的某个不存在的属性，比如说没有返回值的函数的返回值


};

step1();
