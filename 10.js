// let btn = document.querySelector("#click");
// let dblbtn = document.querySelector("#dblclick");
// let enterbtn = document.querySelector("#enterclick");
// let leavebtn = document.querySelector("#leaveclick");


// btn.addEventListener('click', ()=>{
//     alert("hello");
// });

// dblbtn.addEventListener('dblclick',()=>{
//     alert("dblclick");
// });

// enterbtn.addEventListener('mouseenter',()=>{
//     alert("mouse enter");
// });

// leavebtn.addEventListener("mouseleave",()=>{
//     alert("mouse leave");
// });

// let arr = [12,'a',"abhishek","cybrom"];


// for (let vl of arr){
//     console.log(vl);
// }

// Console.log(arr[3]);

// let arr = [];

// for ( let i =0 ; i<5 ; i++){
//     arr[0]=parseInt(prompt("enter a num"));  
//     console.log(arr);
// }

// console.log(arr);

// let arr =[1,2,3,4];
// arr.push("last element","last second");
// arr.unshift("first element","first second");

// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

let arr = [1,2,3,45,6,7,89,10,34,76,87];

 let copy=arr.slice(2,11);

 
 for(el of copy){
    if(el%2==0){
        console.log(el);

    }
 }  