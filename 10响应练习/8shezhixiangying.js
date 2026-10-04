const http = require('http');
const fs= require('fs');

const server = http.createServer((request, response)=>{
    let {pathname} = new URL(request.url,'http://127.0.0.1');
    let file = __dirname + pathname;
    fs.readFile(file,(err,data)=>{
        if(err)
        {
            response.statusCode=404;
            response.end('shibai');
            return;
        }
        response.end(data);
    });
});
server.listen(9000,()=>{
    console.log('qidong');
});