/**
 * Created by BaoQiang on 2017/7/5.
 */

'use strict';

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

function http_demo() {
    const server = http.createServer(function (request, response) {
        console.log(request.method, ': ', request.url);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1>Hello xiao</h1>');
    });
    server.listen(8081);
    console.log('Server is running at http://127.0.0.1:8081')
}

function http_demo2() {
    console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
    const workDir = path.resolve('.');
    const filePath = path.join(workDir, 'pub', 'index.html')
    console.log(filePath)
}

function http_demo3() {
    const root = path.resolve(process.argv[2] || '.');
    console.log('static root dir: ', root);

    const server = http.createServer(function (request, response) {
        const pathname = url.parse(request.url).pathname;
        const filepath = path.join(root, pathname);
        // console.log(filepath);
        fs.stat(filepath, function (err, stats) {
            if (!err && stats.isFile()) {
                console.log('200 ' + request.url);
                response.writeHead(200);
                fs.createReadStream(filepath).pipe(response);
            } else {
                console.log('404 ' + request.url);
                response.writeHead(404);
                response.end('404 Not Found');
            }
        });
    });

    server.listen(8081);
    console.log('Server is running at http://127.0.0.1:8081');

}

http_demo3();