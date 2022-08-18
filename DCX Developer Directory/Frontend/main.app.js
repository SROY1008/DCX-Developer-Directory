var express=require('express')
var bodyparser=require('body-parser')
var http=require('http')
var path=require('path')

var indexController=require('./server/controller/indexController')
var app=express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'dist/dcxdeveloper-directory')))
app.use('/webapi',indexController)

app.get('*',(req,res)=>{
    var mypath=path.join(__dirname,'dist/dcxdeveloper-directory/index.html')
    res.sendFile(mypath)
})
var server=http.createServer(app)
server.listen(3000,(err,result)=>{
    if(err)
         console.log(err)
    else
        console.log("server invoked at link http://localhost:3000")     
})