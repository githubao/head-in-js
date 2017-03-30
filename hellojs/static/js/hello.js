/**
 * Created by BaoQiang on 2017/3/30.
 */

'use strict';

if (false) {
// step1： 弹出
    alert('i am located in static/js/hello.js, i am used by src include');


//step2： 控制台输出结果
    var str = 'Hello World';
    document.writeln(str);


// step3： 数据类型
// Number,String,Boolean,null,Array,Object
// 特殊的两个数字：NaN,Infinity
    var person = {
        name: 'xiao'
    };
    document.writeln(typeof 1);
    document.writeln(typeof '1');
    document.writeln(typeof true);
    document.writeln(typeof null); // object
    document.writeln(typeof undefined);
    document.writeln(typeof [1, '2']);
    document.writeln(typeof new Date());
    document.writeln(typeof person);

    document.writeln(null, undefined, NAN, Infinity);


//step4： 值比较
// == 会自动转化类型然后比较
// false == 0 ==> true
// === 不会转换类型
// false === 0 ==> false
    document.writeln('false === 0' + false === 0); // false
// 浮点数比较
    document.writeln(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.000001);
// nan 值的比较
    document.writeln('NAN === NAN', NAN === NAN);
    document.writeln('isNaN(NaN)', isNaN(NaN));


//step5: 声明变量，变量名
    var $a = 1;
    var _b = 2;


//step6:  异常
    new ReferenceError();


//step7: 字符串
    document.writeln('\x41');
    document.writeln('\u4e2d\u6587');
// 多行字符串
    const multi_line = `345
1234`;
    document.writeln(multi_line);
// 模板字符串
    const name = '小明';
    document.writeln(`hello,${name}`);
// document.writeln('hello,${name}');


//step8: 字符串方法
    const s = 'qwer小';
    document.writeln(s.length);
    document.writeln(s.toUpperCase());
    document.writeln(s[1]);
    document.writeln(s.indexOf('e'));
    document.writeln(s.substring(3, 5));


//step9:  数组的基本操作
    var arr = ['a', 'b', 30, 40];
    document.writeln(arr.indexOf('b'));
    document.writeln(arr.slice(1, 3));
    document.writeln(arr.push('c', 60));
    document.writeln(arr.pop());


//step10:  数组的基本操作二
    var arr2 = ['a', 'b'];
//左边添加元素，返回数组长度
    document.writeln(arr2.unshift(1, 2));
    document.writeln(arr2);
//左边删除一个元素
    document.writeln(arr2.shift());
    arr2.sort();
    document.writeln(arr2);
    arr2.reverse();
// 从第1个位置开始，删除两个元素，再添加两个
// 返回删除的元素
    document.writeln(arr2.splice(1, 2, 'new1', 'new2'));
    document.writeln(arr2);
//组合多个array
    var added = arr2.concat(2, 3, [4, 5]);
    document.writeln(added);
    document.writeln(added.join('-'));


//step11: 对象的基本操作
    var xiaoming = {
        name: 'xiao',
        age: 18
    };
    document.writeln(xiaoming.name);
    document.writeln(delete xiaoming.name);
    xiaoming.sex = 'male';
    document.writeln(xiaoming.toString());
    document.writeln('toString' in xiaoming);
    document.writeln(xiaoming.hasOwnProperty('toString'));


// step12: 条件判断

// step13: 循环判断
    {
        let arr = ['a', 'b', 'c'];
        for (let i in arr) {
            if (!arr.hasOwnProperty(i)) {
                continue;
            }

            document.writeln(i); //string，不是number
            document.writeln(typeof i); //string，不是number
            document.writeln(arr[i]);
        }
        let i = 0;
        for (i = 0; i < arr.length; i++) {
            document.writeln(arr[i]);
        }

        let n = 10;
        while (n > 0) {
            document.writeln(n);
            n -= 2;
        }
    }

// step14,map 和 set
// {} 只支持String作为键值
    var m = new Map([[1, '432'], [2, '568']]);
    m[3] = '333';
    document.writeln(m[1]);
// of 迭代数据
    for (var [key, value] of m) {
        console.log(key);
        console.log(value);
    }
    for (var item of m) {
        console.log(item[0]);
        console.log(item[1]);
    }

// in 和 of 的语义的不同
    var arr3 = [4, 5, 6];
    arr3.name = 'name';
    for (var x in arr3) {
        console.log(arr3[x]);
    }
    for (var x of arr3) {
        console.log(x);
    }

}

// step15， forEach对象
var arr4 = ['q', 'w'];
var set4 = new Set(['q', 'w']);
var map4 = new Map([['q', '1'], ['w', '2']]);

arr4.forEach(function (element, index, array) {
    document.writeln(element, index, array);
});
set4.forEach(function (element, sameElement, set) {
    document.writeln(element, sameElement, set);
});
map4.forEach(function (value, key, map) {
    document.writeln(value, key, map);
});

