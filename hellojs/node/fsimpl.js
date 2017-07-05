/**
 * Created by BaoQiang on 2017/7/5.
 */

'use strict';

const fs = require('fs');

function fs_demo() {
    fs.readFile('../sample.txt', 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

function fs_demo2() {
    try {
        const datas = fs.readFileSync('../sample.txt', 'utf-8');
        console.log(datas);
    } catch (err) {
        console.log(err);
    }
}

function fs_demo3() {
    // is file
    // 9
    // 2017-07-05T08:16:58.273Z
    // 2017-07-05T08:17:02.132Z

    fs.stat('../sample.txt', function (err, stat) {
        if (err) {
            console.log(err);
        } else {
            if (stat.isFile()) {
                console.log('is file')
            } else {
                console.log('is dir');
            }
            console.log(stat.size);
            console.log(stat.birthtime);
            console.log(stat.mtime);
        }
    });
}

function str2buf() {
    // 345
    // <Buffer 33 34 35>
    const data = '345';
    let str = data.toString();
    let buf = new Buffer(str, 'utf-8');
    console.log(str);
    console.log(buf);
}

fs_demo3();
// str2buf();

// 回调示例
// $.getJSON('http://example.com/ajax', function (data) {
//     console.log('回调，获取到结果： ' + data)
// });
// console.log('正常执行');

//正常调用
// const data = getJSONSync('http://example.com/ajax');
