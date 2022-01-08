let bookList = [];
function onPageLoad() {
    const bikeImg = localStorage.getItem('current-img');
    document.getElementById('bike-img').src = bikeImg;
}
onPageLoad();

function pageonload(){
    const user = JSON.parse(localStorage.getItem("booked_Details"));
    if(user != null){
      bookList=user;
    }
  }
  
  pageonload()

function booked(){
    event.preventDefault();
    const name = document.getElementById("User_name").value; 
    const email = document.getElementById("email").value; 
    const dateOfBooking = document.getElementById("Date_booking").value; 
    const address = document.getElementById('Address').value;

    const customer_details = {
        "Firstname": name,
        "email": email,
        "DOB": dateOfBooking,
        "delevery_Address": address,
        }

    bookList.push(customer_details);
    localStorage.setItem("booked_Details", JSON.stringify(bookList));
    window.location.href = "../../pages/ended.html";
}


