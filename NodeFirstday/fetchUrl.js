var http=require('http');
var url=require('url');
//http://localhost:4040/?a=40&b=30
http.createServer(function(request,response){
    var q=url.parse(request.url,true).query;
    if(q.a>q.b)
    {
        response.write("larger is "+q.a);
    }
    else
    {
        response.write("smaller is"+q.b);
    }
    response.end();
}).listen(4043);
