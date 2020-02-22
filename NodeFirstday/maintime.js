var http=require('http');
var aa=require('./moduleee');
http.createServer(function(request,response){
    response.write("Current time and date is"+aa.abc());
    response.end()
}).listen(4041);
