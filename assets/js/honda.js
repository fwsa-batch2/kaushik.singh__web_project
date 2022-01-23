
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/honda_dio.png":
            document.getElementById('engn').src = "../../assets/images/honda-dio_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/honda-dio-engineguard.jpg";
            document.getElementById('spedo').src = "../../assets/images/Honda-dio_silencer.jpeg";
            document.getElementById('suspen').src = "../../assets/images/Honda_dio-spedometer.jpg";
            document.getElementById("price").innerText = "₹72,549 - ₹90,000";
            break;

        case "../assets/images/honda_cb350.png":
            document.getElementById('engn').src = "../../assets/images/honda-cb350-Engine.jpg";
            document.getElementById('hand').src = "../../assets/images/honda-cb350_tank.jpg";
            document.getElementById('spedo').src = "../../assets/images/honda-cb350_spedometer.jpeg";
            document.getElementById('suspen').src = "../../assets/images/honda-cb350_silencer.jpg";
            document.getElementById("price").innerText = "₹1,93 lakhs - ₹2.03 lakhs";
            break;

        case "../assets/images/honda_xblade.png":
            document.getElementById('engn').src = "../../assets/images/Honda-X-Blade_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/Honda-X-Blade_gaurd.jpg";
            document.getElementById('spedo').src = "../../assets/images/Honda-X-Blade_silencer.png";
            document.getElementById('suspen').src = "../../assets/images/Honda-X-Blade_suspension.jpg";
            document.getElementById("price").innerText = "₹70,000 - ₹98,000";
            break;

        case "../assets/images/honda-cb-shine.png":
            document.getElementById('engn').src = "../../assets/images/Honda-cb-shine_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/Honda-cb-shine_gear.jpeg";
            document.getElementById('spedo').src = "../../assets/images/Honda-cb-shine_speodmeter.jpg";
            document.getElementById('suspen').src = "../../assets/images/Honda-CB-ShineSP-Footpegs-64277.jpg";
            document.getElementById("price").innerText = "₹80,450 - ₹1.00 lakhs";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}