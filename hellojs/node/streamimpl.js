/**
 * Created by BaoQiang on 2017/7/5.
 */

'use strict';

const fs = require('fs');

function rs_demo() {
    const rs = fs.createReadStream('../sample.txt', 'utf-8');

    rs.on('data', function (chunk) {
        console.log('DATA: ');
        console.log(chunk);
    });

    rs.on('end', function () {
        console.log('end');
    });

    rs.on('err', function (err) {
        console.log('ERR: ', err);
    })
}

function rs_demo2() {
    const ws1 = fs.createWriteStream('../file/sample2.txt', 'utf-8');
    ws1.write('writing txt\n');
    ws1.end();

    const ws2 = fs.createWriteStream('../file/sample2.bin');
    ws2.write(new Buffer('我writing binary你\n', 'utf-8'));
    ws2.end();
}

function rs_demo3() {
    const rs = fs.createReadStream('../file/sample2.txt');
    const ws = fs.createWriteStream('../file/sample3.txt');
    rs.pipe(ws);

}

// rs_demo();
// rs_demo2();
rs_demo3();
