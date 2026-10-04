const http = require('http');

const server = http.createServer((request,response) =>{
    let method =request.method;
    let a=new URL(request.url,'http://127.0.0.1');
    let pathname = a.pathname;
    console.log(method);
    console.log(pathname);
    if(method === 'GET' && pathname =='/login')
    {
        response.end('dengluyemian');
    }
    else if(method ==='GET' && pathname ==='/rog')
    {
        response.end('zhuceyemian');
    }
});
server.listen(9000,()=>{
    console.log('jiantingzhong');
})