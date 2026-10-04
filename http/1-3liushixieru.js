const fs= require('fs');
const ws =fs.createWriteStream('./wenjian.txt');
ws.write('半亩方提意见来\n');
ws.write('她她她她她她她\n');
ws.write('上课了公司的  \n');
ws.write('比金额的日记哦\n');
ws.close();