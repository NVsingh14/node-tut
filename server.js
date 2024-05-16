const http= require("https");


http.createServer((req,resp)=>{

    resp.write("Hello this is vishal singh");
    resp.end();

}).listen(4500);

