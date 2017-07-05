/**
 * Created by BaoQiang on 2017/7/5.
 */

'use strict';

function global_demo() {
    console.log(global.console);
}

function process_demo() {
    console.log(process === global.process);
    console.log(process.version);
    console.log(process.platform);
    console.log(process.arch);
    console.log(process.cwd());
    console.log(process.chdir('..'));
    console.log(process.cwd());
}

function process_demo2() {
    process.nextTick(function () {
        console.log('下一次循环调用的时候执行')
    });
    console.log('正常执行')
}

function process_demo3() {
    process.on('exit', function (code) {
        console.log('exit code: ', code)
    });
    console.log('正常执行')
}

function env_demo() {
    if (typeof(window) === 'undefined') {
        console.log('node.js')
    } else {
        console.log('browser')
    }
}

env_demo();

