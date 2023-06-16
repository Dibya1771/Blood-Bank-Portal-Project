const uemail = document.getElementById("email");
const upassword = document.getElementById("password");
const Aemail = document.getElementById("Aemail");
const Apassword = document.getElementById("Apass");

function findUser() {
  fetch("http://localhost:8080/UserData", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((udata) => {
      console.log(udata);
      const user = udata.find(
        (el) => el.email === uemail.value && el.password === upassword.value
      );
      console.log(user);
      if (user) {
        localStorage.setItem("notice", "Login");
        Swal.fire({
          title: "Success",
          text: "You have Logged in Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1600,
          willClose: () => {
            window.location.href = "./home.html";
          }
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Invalid Credentials!!",
          icon: "error",
          showConfirmButton: false,
          timer: 1600,
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    });
}

function findAdmin() {
  fetch("http://localhost:8080/AdminData", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((udata) => {
      console.log(udata);
      const user = udata.find(
        (el) => el.Aemail === Aemail.value && el.Apass === Apassword.value
      );
      console.log(user);
      if (user) {
        localStorage.setItem("notice", "Login");
        Swal.fire({
          title: "Logged in Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1600,
          willClose: () => {
            window.location.href = "./DonorTable.html";
          }
        });
      } else {
        Swal.fire({
          title: "Invalid Credentials!!",
          icon: "error",
          showConfirmButton: false,
          timer: 1600,
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    });
}
