
  let signUp = []; //userdetils-signup

  function pageonload(){
    const user = JSON.parse(localStorage.getItem("Users_Details"));
    if(user != null){
      signUp=user;
    }
  }
  
  pageonload()
  
function check_password(event) {
  event.preventDefault();

  let name = document.getElementById("username").value;
  let secondname = document.getElementById("secondname").value;
  let gmail = document.getElementById("email").value;
  let dob = document.getElementById("date").value;
  let Create = document.getElementById("password").value;
  let Confirm = document.getElementById("confirm_password").value;

  let isEmailExist = emailExist(gmail);

  if (Create != Confirm) {decription
    alert("Incorrect password");   
  }
  else if(isEmailExist){
    alert("Email Already Exist");  
  }
  else {
    const customer_details = {
      "Firstname": name,
      "second name": secondname,
      "email": gmail,
      "DOB": dob,
      "password": Create,
      "confrim_pass": Confirm
      }
  
    signUp.push(customer_details);
    localStorage.setItem("Users_Details", JSON.stringify(signUp));
    window.location.href = "../../pages/car.html";
  }

}


function emailExist(currentEmail){
  let used = false;
  let len= signUp.length;
    for (let a = 0; a < len; a++) {
        const email = signUp[a].email;
        if (currentEmail == email) {
            used = true;
            break;
        }
    }
    return used;

}

