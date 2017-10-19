//step1: 数据长度的自动增加 以及不合适的值会被转化为字符串并且不影响数组的长度

const step1 = function () {
    a = [];
    a[1.0] = 4;
    a[2.1] = 5;
    console.log(a.length);
    /*  2.1 被理解成了字符串“2.1”
     合法的整数和尾数为零的浮点数会被转化为数组的键值
     上例中a[0]是undefined，但是a的长度为2，而且 0 in a 返回false
     */

};

//step2: 把“类数组“的对象更改为数组对象的方法
const step2 = function () {
    const args = function () {
        return arguments
    };
    const arrayLike = args('a', 'b');
    const array = [].slice.call(arrayLike);
    const array2 = Array.prototype.slice.call(arrayLike);
    Array.prototype.forEach.call(arrayLike, function (ele, i) {
        console.log(i + '\t' + ele)
    });

    // 转化为数组之后再操作性能更好
    array2.forEach(function (value) {
        console.log(value);
    });

    console.log(array2)
};

// step3: 数据的 in 操作符是判断 键 是否存在的
const step3 = function () {
    const arr = ['a', 'b', 'c'];
    console.log(2 in arr);
    console.log('2' in arr);
    console.log(4 in arr);
    console.log('a' in arr);

//    分别输出 true true false false
};

// step4: 遍历数组
const step4 = function () {
    const arr = ['a', 'b', 'c'];
    for (const key of arr) {
        console.log(key);
    }
};

// step5: 数组的空位
const step5 = function () {
    // const arr = ['a', , 'c'];
    const arr = ['a',undefined, 'c'];
    console.log(arr.length);
    console.log(arr[1]);
    for (const key of arr) {
        console.log(key);
    }

//    长度为3，arr[1]返回undefined，遍历的时候会输出空位
//    数组末尾的逗号没有任何影响，会被忽略
};

step5();