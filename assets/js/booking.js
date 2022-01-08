let bookList = [];
function onPageLoad() {
    const bikeImg = localStorage.getItem('current-img');
    document.getElementById('bike-img').src = bikeImg;
}
onPageLoad();

function booked(){
    event.preventDefault();
    const name = document.getElementById("User_name").value; 
    const email = document.getElementById("email").value; 
    const dateOfBooking = document.getElementById("Date_booking").value; 
    const address = document.getElementById('Address').value;
}


