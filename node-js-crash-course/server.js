//load web pages
const http=require('http')
const path=require('path')
const fs=require('fs')

http.createServer((req,res)=>{
//console.log(req.url);
// //Webpage
// if(req.url === '/'){
//     fs.readFile(path.join(__dirname,'public','index.html'),'utf8',(err,data)=>{
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(data);
//     })   
// }
// //Webpage
// if(req.url === '/about.html'){
//     fs.readFile(path.join(__dirname,'public','about.html'),'utf8',(err,data)=>{
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(data);
//     }) 
// } 

// //API
// if(req.url === '/api/users'){
//     const users=[
//         {name:'Dnyaneshwar',
//         age:24},
//         {name:'Amira',
//         age:28}
//     ]
//         res.writeHead(200,{'Content-Type':'application/json'})
//         res.end(JSON.stringify(users));  
// } 

//Dynamic file path
let filepath =path.join(__dirname,'/public',req.url === '/' ? 'index.html' :req.url)
console.log(filepath);
//Extension of file
let extname=path.extname(filepath)
let contentType='text/html'
switch (extname){
case '.js':
    contentType='text/javascript'
    break;
case '.html':
    contentType='text/html'
    break;
case '.css':
    contentType='text/css'
    break;
case '.png':
    contentType='image/png'
    break;
case '.jpg':
    contentType='image/jpg'
    break;
case '.json':
    contentType='application/json'
    break;
}
fs.readFile(filepath,(err,content)=>{
    if(err){
        if(err.code == 'ENOENT'){
            //page not found
            fs.readFile(path.join(__dirname,'public','404.html'),'utf8',(err,content)=>{
                res.writeHead(404,{'Content-Type':'text/html'})
                res.end(content,'utf8');
            })
        }
        //different error
        else{
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end(`Internal server error${err}`,'utf8');
        }
    }
    //success response
    else{
        res.writeHead(200,{'Content-Type':contentType})
        res.end(content,'utf8');
    }
})
}).listen(process.env.PORT || 5000,()=>{
    console.log(`Server running on port: ${process.env.PORT || 5000}`);
})