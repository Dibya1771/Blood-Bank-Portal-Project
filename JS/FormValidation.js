 //Check valid name or not
 function Alphabet() {
    var inp_text1 = document.getElementById("fname");
    var inp_text2 = document.getElementById("mname");
    var inp_text3 = document.getElementById("lname");
    var letters = /^[A-Za-z]+$/;    
    if (inp_text1.value == "" || inp_text3.value == "") {
        document.getElementById("Message1").innerHTML = "<b>&#10060; Please provide a name</b>";
        document.getElementById("Message1").style.color = "#c30101";
        return false;
    }
    if (inp_text1.value.match(letters) && (inp_text2.value.match(letters) || inp_text2.value == "") && inp_text3.value.match(letters)) {
        document.getElementById("Message1").innerHTML = "<b>&#9989; Verified</b>";
        document.getElementById("Message1").style.color = "#00ff00";
        return true;
    }
    else {

        //alert("Enter alphabet");
        document.getElementById("Message1").innerHTML = "<b>&#10060; All Name field should be alphabets only</b>";
        document.getElementById("Message1").style.color = "#c30101";
        return false;
    }
}

  //--------------------------------------Mobile no-----------------------------------
  function mob_validate() {
    var mob = document.getElementById('contact').value;
    if (mob == "" || isNaN(mob) || mob.length != 10) {
        document.getElementById("Message4").innerHTML = "<b>&#10060; Invalid mobile number. Please enter 10 digit valid mobile number</b>";
        document.getElementById("Message4").style.color = "#c30101";
        return false;
    }
    else {
        document.getElementById("Message4").innerHTML = "<b>&#9989; Verified</b>";
        document.getElementById("Message4").style.color = "#00ff00";
        return true;
    }
}


//--------------------------------------Email-----------------------------------
function emailvalid() {
    var a = document.getElementById('email').value;
    if (a == "") {
        document.getElementById("Message5").innerHTML = "<b>&#10060; Please enter an email id</b>";
        document.getElementById("Message5").style.color = "#c30101";
        return false;
    }
    let atPos = a.indexOf('@');
    if (atPos <= 0) {
        document.getElementById("Message5").innerHTML = "<b>&#10060; Invalid @ position</b>";
        document.getElementById("Message5").style.color = "#c30101";
        return false;
    }
    let dotPos = a.lastIndexOf('.');
    console.log(dotPos);
    console.log(a.length);
    if (dotPos <= 0) {
        document.getElementById("Message5").innerHTML = "<b>&#10060; Invalid email Id, not containing any .(dot) </b>";
        document.getElementById("Message5").style.color = "#c30101";
        return false;
    }
    if (dotPos - atPos < 4 || dotPos == a.length - 1) {    document.getElementById("Message5").innerHTML = "<b>&#10060; Invalid .(dot) position</b>";
        document.getElementById("Message5").style.color = "#c30101";
        return false;
    }
    
    else {
        document.getElementById("Message5").innerHTML = "<b>&#9989; Verified</b>";
        document.getElementById("Message5").style.color = "#00ff00";

    }
}



//------------------------------Age------------------------------
function age_Validator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("Message6").innerHTML = "<b>&#10060;  Choose a date please!</b>";
        return false;
    } else {
        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);
        //extract year from date      
        var year = age_dt.getUTCFullYear();
        //now calculate the age of the user  
        var age = Math.abs(year - 1970);
        //display the calculated age  
        document.getElementById("Message6-1").style.color = "#6cff6c";
        document.getElementById("Message6-1").innerHTML = "<b>Your Age is: " + age + " years.</b> ";
        if (age >= 20 && age <= 32) {
            document.getElementById("Message6").style.color = "#6cff6c";
            document.getElementById("Message6").innerHTML = "<br><b>&#9989; Valid age (your age comes between 18 to 65)</b>";
            return true;
        }
        else {
            document.getElementById("Message6").style.color = "#c30101";
            document.getElementById("Message6").innerHTML = "<br><b>&#10060; You are not eligible to donate blood (Age must be between 18 to 65 years)</b>";
            return false;
        }
    }
}
// ----------------------State and district------------------
function populateDistricts() {
    var state = document.getElementById("stateSelect");
    var district = document.getElementById("districtSelect");
    district.innerHTML = "";

    if (state.value == "Andhra Pradesh") {
        var optionArray = ["Select a District|Select a District", "Anantapur|Anantapur", "Chittoor|Chittoor", "Kadapa|Kadapa", "Krishna|Krishna", "Kurnool|Kurnool", "Nellore|Nellore", "Prakasam|Prakasam", "Srikakulam|Srikakulam", "Vishakhapatnam|Vishakhapatnam", "Vizianagaram|Vizianagaram", "West Godavari|West Godavari", "East Godavari|East Godavari", "others|others"];


    } else if (state.value == "Tamil Nadu") {
        var optionArray = ["Select a District|Select a District", "Ariyalur|Ariyalur", "Chennai|Chennai", "Coimbatore|Coimbatore", "Cuddalore|Cuddalore", "Dharmapuri|Dharmapuri", "Dindigul|Dindigul", "Kanchipuram|Kanchipuram", "Kanyakumari|Kanyakumari", "Karur|Karur", "Madurai|Madurai", "Nagapattinam|Nagapattinam", "Namakkal|Namakkal", "Perambalur|Perambalur", "Pudukkottai|Pudukkottai", "Ramanathapuram|Ramanathapuram", "Salem|Salem", "Sivaganga|Sivaganga", "Thanjavur|Thanjavur", "The Nilgiris|The Nilgiris", "Theni|Theni", "Thoothukudi|Thoothukudi", "Tiruchirappalli|Tiruchirappalli", "Tirunelveli|Tirunelveli", "Tiruvallur|Tiruvallur", "Tiruvannamalai|Tiruvannamalai", "Tiruvarur|Tiruvarur", "Vellore|Vellore", "Viluppuram|Viluppuram", "Virudhunagar|Virudhunagar", "others|others"];
    }
    else if (state.value == "Assam") {
        var optionArray = ["Select a District|Select a District", "Baksa|Baksa", "Barpeta|Barpeta", "Biswanath|Biswanath", "Bongaigaon|Bongaigaon", "Cachar|Cachar", "Charaideo|Charaideo", "Chirang|Chirang", "Darrang|Darrang", "Dhemaji|Dhemaji", "Dhubri|Dhubri", "Dibrugarh|Dibrugarh", "Goalpara|Goalpara", "Golaghat|Golaghat", "Hailakandi|Hailakandi", "Hojai|Hojai", "Jorhat|Jorhat", "Kamrup Metropolitan|Kamrup Metropolitan", "Kamrup (Rural)|Kamrup (Rural)", "Karbi Anglong|Karbi Anglong", "Karimganj|Karimganj", "Kokrajhar|Kokrajhar", "Lakhimpur|Lakhimpur", "Majuli|Majuli", "Morigaon|Morigaon", "Nagaon|Nagaon", "Nalbari|Nalbari", "Dima Hasao|Dima Hasao", "South Salmara Mankachar|South Salmara Mankachar", "Tinsukia|Tinsukia", "Udalguri|Udalguri", "West Karbi Anglong|West Karbi Anglong", "others|others"];
    }
    else if (state.value == "Bihar") {
        var optionArray = ["Select a District|Select a District", "Araria|Araria", "Arwal|Arwal", "Aurangabad|Aurangabad", "Banka|Banka", "Begusarai|Begusarai", "Bhagalpur|Bhagalpur", "Bhojpur|Bhojpur", "Buxar|Buxar", "Darbhanga|Darbhanga", "East Champaran|East Champaran", "Gaya|Gaya", "Gopalganj|Gopalganj", "Jamui|Jamui", "Jehanabad|Jehanabad", "Kaimur|Kaimur", "Katihar|Katihar", "Khagaria|Khagaria", "Kishanganj|Kishanganj", "Lakhisarai|Lakhisarai", "Madhepura|Madhepura", "Madhubani|Madhubani", "Munger|Munger", "Muzaffarpur|Muzaffarpur", "Nalanda|Nalanda", "Nawada|Nawada", "Patna|Patna", "Purnia|Purnia", "Rohtas|Rohtas", "Saharsa|Saharsa", "Samastipur|Samastipur", "Saran|Saran", "Sheikhpura|Sheikhpura", "Sheohar|Sheohar"];
    }
    else if (state.value == "Jharkhand") {
        var optionArray = ["Select a District|Select a District", "Bokaro|Bokaro", "Chatra|Chatra", "Deoghar|Deoghar", "Dhanbad|Dhanbad", "Dumka|Dumka", "East Singhbhum|East Singhbhum", "Garhwa|Garhwa", "Giridih|Giridih", "Godda|Godda", "Gumla", "Hazaribagh|Hazaribagh", "Jamtara|Jamtara", "Khunti|Khunti", "Koderma|Koderma", "Latehar|Latehar", "Lohardaga|Lohardaga", "Pakur|Pakur", "Palamu|Palamu", "Ramgarh|Ramgarh", "Ranchi|Ranchi", "Sahebganj|Sahebganj", "Seraikela Kharsawan|Kharsawan", "Simdega|Simdega", "West Singhbhum|West Singhbhum"];
    }
    else if (state.value == "Odisha") {
        var optionArray = ["Select a District|Select a District", "Angul|Angul", "Balangir|Balangir", "Balasore|Balasore", "Bargarh|Bargarh", "Bhadrak|Bhadrak", "Boudh|Boudh", "Cuttack|Cuttack", "Debagarh|Debagarh", "Dhenkanal|Dhenkanal", "Gajapati|Gajapati", "Ganjam|Ganjam", "Jagatsinghpur|Jagatsinghpur", "Jajpur|Jajpur", "Jharsuguda|Jharsuguda", "Kalahandi|Kalahandi", "Kandhamal|Kandhamal", "Kendrapara", "Kendujhar|Kendujhar", "Khordha|Khordha", "Koraput|Koraput", "Malkangiri|Malkangiri", "Mayurbhanj|Mayurbhanj", "Nabarangpur|Nabarangpur", "Nayagarh|Nayagarh", "Nuapada|Nuapada", "Puri|Puri", "Rayagada|Rayagada", "Sambalpur|Sambalpur", "Subarnapur|Subarnapur", "Sundergarh|Sundergarh"];
    }
    else if (state.value == "Goa") {
        var optionArray = ["Select a District|Select a District", "North Goa|North Goa", "South Goa|South Goa"];
    }
    else if (state.value == "Gujarat") {
        var optionArray = ["Select a District|Select a District", "Ahmedabad|Ahmedabad", "Amreli|Amreli", "Anand|Anand", "Aravalli|Aravalli", "Banaskantha|Banaskantha", "Bharuch|Bharuch", "Bhavnagar|Bhavnagar", "Botad|Botad", "Chhota Udaipur|Chhota Udaipur", "Dahod|Dahod", "Dang|Dang", "Devbhoomi Dwarka|Devbhoomi Dwarka", "Gandhinagar|Gandhinagar", "Gir Somnath|Somnath", "Jamnagar|Jamnagar", "Junagadh|Junagadh", "Kheda|Kheda", "Kutch|Kutch", "Mahisagar|Mahisagar", "Mehsana|Mehsana", "Morbi|Morbi", "Narmada|Narmada", "Navsari|Navsari", "Panchmahal|Panchmahal", "Patan|Patan", "Porbandar|Porbandar", "Rajkot|Rajkot", "Sabarkantha|Sabarkantha", "Surat|Surat", "Surendranagar|Surendranagar", "Tapi|Tapi", "Vadodara|Vadodara", "Valsad|Valsad"];
    }
    else if (state.value == "Haryana") {
        var optionArray = ["Select a District|Select a District", "Ambala|Ambala", "Bhiwani|Bhiwani", "Charkhi Dadri|Charkhi Dadri", "Faridabad|Faridabad", "Fatehabad|Fatehabad", "Gurugram|Gurugram", "Hisar|Hisar", "Jhajjar|Jhajjar", "Jind|Jind", "Kaithal|Kaithal", "Karnal|Karnal", "Kurukshetra|Kurukshetra", "Mahendragarh|Mahendragarh", "Mewat|Mewat", "Palwal|Palwal", "Panchkula|Panchkula", "Panipat|Panipat", "Rewari|Rewari", "Rohtak|Rohtak", "Sirsa|Sirsa", "Sonipat|Sonipat", "Yamunanagar|Yamunanagar"];
    }
    else if (state.value == "Puducherry") {
        var optionArray = ["Select a District|Select a District", "Karaikal|Karaikal", "Mahe|Mahe", "Puducherry|Puducherry", "Yanam|Yanam"];
    }
    else if (state.value == "Delhi") {
        var optionArray = ["Select a District|Select a District", "Central Delhi|Central Delhi", "East Delhi|East Delhi", "New Delhi|New Delhi", "North Delhi|North Delhi", "North East Delhi|North East Delhi", "North West Delhi|North West Delhi", "Shahdara|Shahdara", "South Delhi|South Delhi", "South East Delhi|South East Delhi", "South West Delhi|South West Delhi", "West Delhi|West Delhi"];
    }
    else if (state.value == "Chandigarh") {
        var optionArray = ["Select a District|Select a District", "Chandigarh|Chandigarh"];
    }
    else if (state.value == "Sikkim") {
        var optionArray = ["Select a District|Select a District", "East Sikkim|East Sikkim", "North Sikkim|North Sikkim", "South Sikkim|South Sikkim", "West Sikkim|West Sikkim"];
    }
    else if (state.value == "Kerala") {
        var optionArray = ["Select a District|Select a District", "Alappuzha|Alappuzha", "Ernakulam|Ernakulam", "Idukki|Idukki", "Kannur|Kannur", "Kasaragod|Kasaragod", "Kollam|Kollam", "Kottayam|Kottayam", "Kozhikode|Kozhikode", "Malappuram|Malappuram", "Palakkad|Palakkad", "Pathanamthitta|Pathanamthitta", "Thiruvananthapuram|Thiruvananthapuram", "Thrissur|Thrissur", "Wayanad|Wayanad"];
    }
    else if (state.value == "Karnataka") {
        var optionArray = ["Select a District|Select a District", "Bagalkot|Bagalkot", "Bangalore Rural|Bangalore Rural", "Bangalore Urban|Bangalore Urban", "Belgaum|Belgaum", "Bellary|Bellary", "Bidar|Bidar", "Vijayapura|Vijayapura", "Chamarajanagar|Chamarajanagar", "Chikkaballapur|Chikkaballapur", "Chikkamagaluru|Chikkamagaluru", "Chitradurga|Chitradurga", "Dakshina Kannada", "Davanagere|Davanagere", "Dharwad|Dharwad", "Gadag|Gadag", "Gulbarga|Gulbarga", "Hassan|Hassan", "Haveri|Haveri", "Kodagu|Kodagu", "Kolar|Kolar", "Koppal|Koppal", "Mandya|Mandya", "Mysore|Mysore", "Raichur|Raichur", "Ramanagara|Ramanagara", "Shimoga|Shimoga", "Tumkur|Tumkur", "Udupi|Udupi", "Uttara Kannada|Uttara Kannada", "Yadgir|Yadgir"];
    }
    else if (state.value == "Others") {
        var optionArray = ["Select a District|Select a District", "others|others"];
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        district.options.add(newOption);
    }
}

function checkDeclare() {
    if (document.getElementById("declareChk").checked == false) {
        swal("You are Un-checked our privacy policy", "Please check this field, Otherwise you can't proceed further", "warning");
        //alert("You are Un-checked our privacy policy\nPlease check this field, Otherwise you can't proceed further");
        return false;
    }
}

//-------------------------- Weight --------------------
function  Weight_Validator(){
    var weight = document.getElementById("weight").value;
    if(weight==""){
        document.getElementById("Message20").style.color = "#c30101";
        document.getElementById("Message20").innerHTML = "<br><b>&#10060; Please provide Your weight";
        return false;
    }
    if (weight >= 50 && weight <= 60) {
        document.getElementById("Message20").style.color = "#6cff6c";
        document.getElementById("Message20").textContent = " You can donate 350-400ml";
        return true;
      }
      else if (weight > 60 && weight <= 70) {
        document.getElementById("Message20").style.color = "#6cff6c";
        document.getElementById("Message20").textContent = " You can donate 400-500ml";
      }
      else if (weight > 70 && weight <= 80) {
        document.getElementById("Message20").style.color = "#6cff6c";
        document.getElementById("Message20").textContent = " You can donate 500-550ml blood";
      }
      else if (weight > 80 && weight <= 90) {
        document.getElementById("Message20").style.color = "#6cff6c";
        document.getElementById("Message20").textContent = " You can donate 550-600ml blood";
      }
      else if (weight > 90 && weight <= 100) {
        document.getElementById("Message20").style.color = "#6cff6c";
        document.getElementById("Message20").textContent = " You can donate 550-600ml blood";
      }
      else if (weight > 100) {
        document.getElementById("Message20").textContent = " You can donate above  600ml blood";
      }
    else {
        document.getElementById("Message20").style.color = "#c30101";
        document.getElementById("Message20").innerHTML = "<br><b>&#10060; You are not eligible to donate blood (weight atleast 50kg)</b>";
        return false;
    }
}
  // Validate the entire form
//   function formValidation() {

//   }