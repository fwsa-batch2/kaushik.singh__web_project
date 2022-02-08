let userDetails = [];

console.log(userDetails);
function pageOnLoad() {
  const loginUser = JSON.parse(localStorage.getItem("Users_Details"));
  console.log(loginUser)
  if (loginUser !== null) {
    userDetails = loginUser;
  }
  console.log(loginUser);
}
function submitHandler(event) {
  event.preventDefault();
  const userMailId = document.getElementById("mail").value;
  console.log(userMailId)
  const userPass = document.getElementById("passwo").value;
  console.log(userPass);
  let isDetailExist = isUserDetailExist(userMailId, userPass);
  if (isDetailExist !== true) {
    alert("Invalid mail or password")
    return null;
  }
  else {
    alert("WELCOME")
    window.location.href="./../../pages/car.html"
    localStorage.setItem("LoggedInUser", userMailId);
  }
}
function isUserDetailExist(userMailId, userPassword) {
  let isExist = false;
  const lengthOfArray = userDetails.length;
  for (let i = 0; i < lengthOfArray; i++) { //len-length
    const valuesInArray = userDetails[i];
    const userEmail = valuesInArray.email;
    console.log(userEmail);
    const userPass = valuesInArray.password;
    console.log(userPass);
    if (userMailId == userEmail && userPassword == userPass) {
      isExist = true;
      break;
    }
  }
  return isExist;
}

pageOnLoad()