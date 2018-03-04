var http=require('http');
var fs=require('fs');
// var path=require('path');
var extract=require('./extract');
var handleError=function(err,res){
    res.writeHead(404);
    fs.readFile('app/404.html',function(err,data){
      res.end(data);
    });
};

var server=http.createServer(function(req,res){
  console.log('Responding to a request.');
  // res.end('<h1>hello,word!!!</h1>');
  // var url=req.url;
  // var fileName='index.html';
  // if (url.length>1) {
  //        fileName=url.substring(1);
  // }
  // console.log(fileName);
  // var filePath=path.resolve(__dirname,'app',fileName);
  // fs.readFile('app/index.html',function(err,data){
  var filePath=extract(req.url);
  fs.readFile(filePath,function(err,data){
    if(err){
      handleError(err,res);
      return;
    }else{
      res.end(data);
    }
  });
});
server.listen(3000);
