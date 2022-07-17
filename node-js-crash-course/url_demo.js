const url= require('url')

let myurl=new URL('https://github.com/dnyaneshwargiri/nodejs-crash-course ');
//Serialized url
console.log(myurl.href);
//Root domain
console.log(myurl.host); //gives port
//Host name
console.log(myurl.hostname); //doesn't give port
//Path name
console.log(myurl.pathname); //doesn't give port
//Sarch query
console.log(myurl.search); //gives query
//Search queryparams
console.log(myurl.searchParams); //gives query parmas
//Add queryparams
myurl.searchParams.append('abc','123'); //add query parmas
console.log(myurl.searchParams);
//Foreach on searchParams
myurl.searchParams.forEach((value,name)=>{
    console.log(`${name} : ${value}`);
})