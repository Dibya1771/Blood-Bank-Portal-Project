Display();

function Display() {
  fetch("http://localhost:8080/DonorsDetails", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((udata) => {
      const table = document.querySelector("table");
      udata.map((el) => {
        const tr = document.createElement("tr");

        const td0 = document.createElement("td");
        td0.innerText = el.id;
        const td1 = document.createElement("td");
        el.name = el.fname + " " + el.mname + " " + el.lname;
        td1.innerText = el.name;
            // td1.style.color="#d0d0ff";

            const td2=document.createElement("td");
            td2.innerText=el.email;
            // td2.style.color="#d0d0ff";
            const td3=document.createElement("td");
            td3.innerText=el.contact;
            // td3.style.color="#d0d0ff";

            const td4=document.createElement("td");
            td4.innerText=el.dob;
            //Calculating age
            var Dob_Age = new Date(el.dob);
            var month_diff = Date.now() - Dob_Age.getTime();
            var age_dt = new Date(month_diff);
            //extract year from date      
            var year = age_dt.getUTCFullYear();
            //now calculate the age of the user  
            var age = Math.abs(year - 1970);
            const td41=document.createElement("td");
            td41.innerText=age;

            const td5=document.createElement("td");
            td5.innerText=el.gender;
            const td6=document.createElement("td");
            td6.innerText=el.blood_group;
            const td7=document.createElement("td");
            td7.innerText=el.disease;
            const td8=document.createElement("td");
            td8.innerText=el.weight;
            const td9=document.createElement("td");
            td9.innerText=el.district;
            const td10=document.createElement("td");
            td10.innerText=el.state;

            //Blood Unit
            const td11=document.createElement("td");
            var x=el.weight;
            if (x >= 50 && x <= 60) {
                td11.innerText="350-400";
              }
              else if (x > 60 && x <= 70) {
                td11.innerText="350-400";
              }
              else if (x > 70 && x <= 80) {
                td11.innerText="350-400";
              }
              else if (x > 80 && x <= 90) {
                td11.innerText="350-400";
              }
              else if (x > 90 && x <= 100) {
                td11.innerText="350-400";
              }
              else if (el.weight > 100) {
                td11.innerText="350-400";
              }
        

              const td12 = document.createElement("td");
        const deletebutton = document.createElement("button");
        deletebutton.innerText = "Reject";
        td12.appendChild(deletebutton);

        deletebutton.addEventListener("click", () => {
          fetch(`http://localhost:8080/DonorsDetails/${el.id}`, {
            method: "DELETE",
          })
            .then((res) => {
              alert("Deleted the item");
            })
            .catch((err) => {
              alert("Error occurred while deleting");
            });
        });

        tr.append(td0,td1,td2,td3,td4,td41,td5,td6,td7,td8,td9,td10,td11,td12);
        table.append(tr);
      });
    });
}