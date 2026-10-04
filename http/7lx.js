const http = require('http');
const server = http.createServer((request,response)=>{
    response.end('nihaoyagaogege');
});
server.listen(9000,()=>{
    console.log('qidongzhong');
});