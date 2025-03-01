let a= "abhishek";
console.log(a);

let b = 20;
let c = 30;

let d = b;
b = c;
c = d;

console.log("b =",b, "  c = " ,c);


let n = parseInt(prompt("enter a no"))

if(n%2==0){
    console.log("even");
}else{
    console.log("odd");
}


let user = parseInt(prompt("enter a no"))

if( user >=18){
    console.log("eligible to vote")
}else{
    console.log("not eligible to vote")
}