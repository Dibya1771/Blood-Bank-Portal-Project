const logoutbtn = document.getElementById("logout-btn");
logoutbtn.addEventListener('click', () => {
    localStorage.setItem("notice", "Logout");
    window.location.replace("home.html");
})