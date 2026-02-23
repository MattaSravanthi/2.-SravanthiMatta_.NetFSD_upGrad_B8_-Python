let submit=document.getElementById("submit")

submit.addEventListener("click",function(){
    let email=document.getElementById("Email").vlaue
    let password=document.getElementById("password").vlaue
    let message=document.getElementById("message")
    if(username=="sravanthi123@gmail.com" && password=="123456"){
        window.location.href="dashboard.html";
        return false
    }
    else {
        message.textContent=`incorrect id or password`
    }
})