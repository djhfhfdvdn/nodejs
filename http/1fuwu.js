const http = require('http');

const server = http.createServer((request , response) => (
    response.end('hello HTTP Server')
));

server.listen(9000, ()=>{
    console.log('服务完成');
});