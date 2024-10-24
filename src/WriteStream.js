var fs = require("fs");  
var data = 'A Solution of all Technology';  

var writerStream = fs.createWriteStream('demo.txt');  
 
writerStream.write(data,'UTF8');  

writerStream.end();  
 
writerStream.on('finish', function() {  
    console.log("Write completed.");  
});  
writerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");  