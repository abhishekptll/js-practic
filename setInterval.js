let ct =0
let st 
function start(){
    let but=document.querySelector("#cou");
   st= setInterval(()=>{but.innerHTML=ct++;
    },500);

}



function stp(){
    clearInterval(st)
}