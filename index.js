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
// --------------------------------------------------------------------

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
// --------------------------------------------------------

let vl = 0
 function incre(){

   let c = document.getElementById("counter");
   vl++
   c.textContent = vl;

  }
// --------------------------------------------------------------------

  function decre(){

     if( vl > 0 ){

      let c = document.getElementById("counter");
   vl--
   c.textContent = vl;

     }
  }
 
// --------------------------------------------------------------------

  function app(){
    let img = document.getElementById("apimg");
    img.src="data:image/jpeg;base64,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" 
  }

  function bana(){

    let img = document.getElementById("apimg");
    img.src="data:image/jpeg;base64,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"
  }

  function oran(){

    let img = document.getElementById("apimg");
    img.src="data:image/jpeg;base64,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"
    }



    let b= document.querySelector(".head");
    b.innerHTML="abhishek";




