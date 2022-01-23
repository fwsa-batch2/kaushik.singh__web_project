
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/bajaj_pulsar-220f.png":
            document.getElementById('engn').src = "../../assets/images/Bajaj_Pulsar-200f-engine.png";
            document.getElementById('hand').src = "../../assets/images/bajaj-pulsar-200f_speodmeter.jpeg";
            document.getElementById('spedo').src = "../../assets/images/bajaj-pulsar-20f_silencer.webp";
            document.getElementById('suspen').src = "../../assets/images/bajaj-pulsar-220-head-light-200x200.jpg";
            document.getElementById("price").innerText = "₹1.18 lakhs - ₹1.37 lakhs";
            break;

        case "../assets/images/Bajaj_pulsar-150.png":
            document.getElementById('engn').src = "../../assets/images/bajaj-150_engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/bajaj-pulsar-150-seat.png";
            document.getElementById('spedo').src = "../../assets/images/bajaj-150_tail.JPG";
            document.getElementById('suspen').src = "../../assets/images/bajaj-150_spedometer.jpeg";
            document.getElementById("price").innerText = "₹75,098 - ₹1.13 lakhs";
            break;

        case "../assets/images/bajaj_pulsar-ns400.png":
            document.getElementById('engn').src = "../../assets/images/bajaj_ns400-engine.webp";
            document.getElementById('hand').src = "../../assets/images/bajaj_ns400-seats.jpg";
            document.getElementById('spedo').src = "../../assets/images/bajaj_ns400-doom.jpeg";
            document.getElementById('suspen').src = "../../assets/images/bajaj_ns400-speodmeter.jpeg";
            document.getElementById("price").innerText = "₹1.90 lakhs - ₹2.50 lakhs";
            break;

        case "../assets/images/bajaj_dominar-400.png":
            document.getElementById('engn').src = "../../assets/images/bajaj-dominar-400-overview-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/2019-bajaj-dominar-400-seat.jpg";
            document.getElementById('spedo').src = "../../assets/images/bajaj_dominor-400_doom.jpg";
            document.getElementById('suspen').src = "../../assets/images/bajaj_dominor-400_gaurd.jpg";
            document.getElementById("price").innerText = "₹1.92 lakhs - ₹2.13 lakhs";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}