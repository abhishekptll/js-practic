
   
function frmdata(){

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#age").value;

  if(name== ""){
    alert("please enter your name");
    document.querySelector("#name").focus()
    let error = document.querySelector("#errorname");
    error.innerHTML ="Please enter your name "
    error.style.color = "red";
    return false;
  }
  else if(email== ""){
    alert("please enter your email");
    document.querySelector("#email").focus()
    let error = document.querySelector("#erroremail");
    error.innerHTML="please enter email"
    return false;
  }
  else if(!(email.includes("gmail")||email.includes("yahoo")) ){
    alert("please enter valid email ");
    document.querySelector("#email").focus()
    return false;
  } 
  else if(age== ""){
    alert("please enter your age");
    document.querySelector("#age").focus()
    let error = document.querySelector("#errorage")
    return false;
  }
  else if(age>=999){
    alert("please enter you valid age");
    document.querySelector("#age").focus()
    return false;
  }
  else if( isNaN(age)){
    alert("please enter age in number")
  }

}
