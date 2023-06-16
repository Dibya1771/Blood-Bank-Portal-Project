const fname=document.getElementById("fname");
const mname=document.getElementById("mname");
const lname=document.getElementById("lname");

// const takenName = fname+" "+mname+" "+lname;
const takenContact = document.getElementById("contact");
const takenEmail = document.getElementById("email");
const takenDOB = document.getElementById("DOB");
const takeGender = document.getElementById("gender");
const takenState = document.getElementById("stateSelect");
const takenDist = document.getElementById("districtSelect");
const takenHouse = document.getElementById("house");
const takenBloodGrp = document.getElementById("blood_Grp");
const takenDisease = document.getElementById("disease");
const takenWeight = document.getElementById("weight");

function FormDataSubmit() {
  if ( takenContact.value != "") {
    const obj = {
      fname: fname.value,
      mname: mname.value,
      lname: lname.value,
      contact: takenContact.value,
      email: takenEmail.value,
      dob: takenDOB.value,
      gender: takeGender.value,
      state: takenState.value,
      district: takenDist.value,
      house: takenHouse.value,
      blood_group: takenBloodGrp.value,
      disease: takenDisease.value,
      weight: takenWeight.value,
    };
   
    fetch("http://localhost:8080/DonorsDetails", {
      method: "POST",    //If you use post add a lid in the objectv
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    .then((res) => res.json())
    .then((udata) => {
      console.log(udata);
      window.location.href = "./home.html";  
      
    })
     .catch((err) => console.log(err));
  
    
    Swal.fire({
      title: "Success",
      text: "Your Data is submitted successfully!!",
      icon: "success",
      //showConfirmButton: false,
      timer: 1600,
    });
    alert("Your Data is submitted successfully!!");

    }
    
    else {
      Swal.fire({
        title: "Error",
        text: "All fields are required to fill!!",
        icon: "error",
        //showConfirmButton: false,
        timer: 1500,
      });
      // alert("All fields are required to fill");
    }
    
}

//without making function we can directly write addEventListener also (like class assignment (name- register_new.js ))
