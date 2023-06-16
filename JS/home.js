const butt=document.getElementById("donor_btn");
butt.addEventListener("click",()=>{
    var getcode = localStorage.getItem("notice");
            if(getcode == "Login"){
                window.location.href = "DonationForm.html";
            }else{
                alert("Want to Donate Blood. You need to first SignIn");
            window.location.href = "login.html";
    }
})