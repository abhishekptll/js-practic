// let radi =  parseInt(prompt("enter radius"));
// let pi = 3.14;
// console.log(pi*radi*radi);

// let a =   parseInt(prompt("enter first no. "));
// let b =  parseInt(prompt("enter sec no."));
// let c =a;
// a=b;
// b=c;
// console.log("a",a,"b",b);


// let a= parseInt(prompt("enter first no. "));
// let b = parseInt(prompt("enter first no. "));

// let c = a+b;

// console.log(c*c);


// let num  =  parseInt(prompt("enter a No."));

// if(num > 0){
//     console.log("+ve no.  ",num);
// }else{
//     console.log("-ve no.   ",num);
// }


// let num  =  parseInt(prompt("enter a No."));

// if(num%2!=0){
//     console.log("odd",num);
// }else{
//     console.log("even",num);
// }


// let num  =  parseInt(prompt("enter a No."));

// if(num%2!=0){
//     console.log("odd",num);
    
//     console.log("area of a cir",3.14*num*num);

// }else{
//     console.log("even",num);
//     console.log("cuv",num*num*num);

// for( let i = 1 ; i<=20; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// for(let i =20; i>=1 ; i--){
//     console.log(i);
//     document.write("<h1>", i, "</h1>" );
// }


// function sum(){
//     let n = parseInt(prompt("enter a number"));

//     for(let i = 1 ; i<=10 ;i++){
//         console.log(n, "*",i,"=",i*n);
//         document.write(n, "*",i,"=",i*n);
//     }
    
// }

// sum();

// function evenodd(num){
//     if(num%2!=0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }

// evenodd(21)


// function evenodd(num){
//     if(num%2!=0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }

// console.log(evenodd(20));


// function areaofc(r){
//    return 3.14*r*r
// }

// let r = parseInt(prompt("enter a num"));
// console.log(areaofc(r));


// function func(){
//    return "google";
// }

// let a=func();
// console.log(a);


function zero(){
   let change = document.getElementById("a");
   change.textContent="zero";
}

function red(){
  let  red = document.getElementById("color");
  red.style.backgroundColor = "red"
  
}
function yellow(){
   let  red = document.getElementById("color");
   red.style.backgroundColor = "yellow"
   
 }
 function blue(){
   let  red = document.getElementById("color");
   red.style.backgroundColor = "blue"
   
 }