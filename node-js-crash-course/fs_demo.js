const fs= require('fs')
const path= require ('path')

// //Create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log('Folder created.');
// })
// //Create & write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'I love node.js',err=>{
//     if(err) throw err;
//     console.log('File written.');
// })
//File append   
fs.appendFile(path.join(__dirname,'/test','hello.txt'),'\n I love express.js',err=>{
    if(err) throw err;
    console.log('File appended.');
})
//Read File
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
//Rename File
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','new.txt'),(err)=>{
    if(err) throw err;
    console.log('File renamed');
})