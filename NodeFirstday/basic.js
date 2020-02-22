var http=require('http');
http.createServer(function(request,response){
    var a=15;
    var b=19;
    if(a>b)
    {
        response.write("a is greater than b");
    }
    else
    {
        response.write("b is greater than a");
    }
    response.end();
}).listen(4042);
//ALWAY DO STOP ND RERUN WHEN RUNNING DIFFERNENT FILE AT SAME TIME.
