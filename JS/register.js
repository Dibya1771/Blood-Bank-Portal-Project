const takenName = document.getElementById("name");
const takenMobile = document.getElementById("mobile");
const takenEmail = document.getElementById("email");
const takenPassword = document.getElementById("password");

function submitData() {

  if (takenEmail.value !== "" && takenPassword.value !== "" && takenName.value !=="" && takenMobile.value !== "") {
    const obj = {
      id: Date.now(),
      name: takenName.value,   //left hand side is the key (that is same as the id name (and it is created in the data.json))
      mobile: takenMobile.value,
      email: takenEmail.value,
      password: takenPassword.value,
    };
    // console.log(obj);  //it shows all the values declare in the objects
    // console.log(Name,Mobile,Email);

    fetch("http://localhost:8080/UserData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = "./login.html"; 
    })
    .catch((err) => console.log(err));
    Swal.fire({
      title: "Your account has been created",
      text: "... Please Login to continue.!!",
      icon: "success",
      //showConfirmButton: false,
      timer: 2000,
      
    });
    alert("Your account has been created...\n Please Login to continue.");

    }
    
    else {
      //alert("All fields are required to fill");
      Swal.fire({
        title: "Error",
        text: "All fields are required to fill!!",
        icon: "error",
        //showConfirmButton: false,
        timer: 1500,
      });
    }
     
}

//without making function we can directly write addEventListener also (like class assignment (name- register_new.js ))