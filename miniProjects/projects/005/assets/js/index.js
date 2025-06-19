const email = "test@gmail.com";
const password ="1234";


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit",function(event){
event.preventDefault();

const emailElValue = document.getElementById("email").value;
const passwordElValue = document.getElementById("password").value;
const errorMessage = document.getElementById("errorMessage");

console.log(emailElValue,passwordElValue);


if(email===emailElValue && password===passwordElValue){
    alert("loggin success");
    window.location.href="todo.html";
}else{
    errorMessage.classList.remove("d-none");
}
})




