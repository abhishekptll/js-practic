// let ob = {
//     empName : "abhi",
//     empAge : 23,
//     empContact :12345,
//     empAccount: {
//         empBalance : 20000,
//         empAddress : "pari bazar"
//     }

// }
// console.log (ob);
// console.log(ob.empName);
// console.log(ob.empContact);

// console.log(ob.empAccount.empAddress);



// function savedata(){
//     let person= {
//         name: document.querySelector("#name").value,
//          age:document.querySelector("#age").value,
//          contact:document.querySelector("#contact").value,
//     }
//     console.log(person);


//     return false;
// };




// let ob ={
//     name : "abhishek",
//     contact : 344334,
//     obfun: function (){
//         alert("working");
//     },
//     car : ["bmw", "audi", "maruti"],
// }
// ob.obfun();
// console.log(ob.car[1]);




let obj1 = {
    name : "imran ",age : 33, contact : 3245,
}
let obj2 = {
    city :"bpl", state : "mp",
}

obj2.email = "imran@gmail.com";

delete obj2.state;

let obj3 ={...obj1, ...obj2 };
console.log(obj3);

for(let k in obj3){                      //for of loop is not working 
    console.log(k);
}
for(let k in obj3){
    console.log(obj3[k]);
}


let k = Object.keys(obj3)        //object is a key and key use for return a arrr in keys then the k is a variable store the arr in k .
console.log(k[0]);
