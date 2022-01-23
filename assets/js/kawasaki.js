
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/kawasaki_ninja-h2r.png":
            document.getElementById('engn').src = "../../assets/images/Kawasaki-Ninja-H2-engine-specs-600x507.jpg";
            document.getElementById('hand').src = "../../assets/images/Kawasaki-Ninja-H2_breaks.jpg";
            document.getElementById('spedo').src = "../../assets/images/Kawasaki-Ninja-H2_gaurd.jpg";
            document.getElementById('suspen').src = "../../assets/images/Kawasaki-Ninja-H2_silencer.jpeg";
            document.getElementById("price").innerText = "₹22.9 lakhs - ₹79.9 lakhs";
            break;

        case "../assets/images/kawasaki_ninja-1000.png":
            document.getElementById('engn').src = "../../assets/images/Kawasaki-1000_engine_new.jpg";
            document.getElementById('hand').src = "../../assets/images/Kawasaki-1000_shiled.jpg";
            document.getElementById('spedo').src = "../../assets/images/Kawasaki-1000_gear.jpg";
            document.getElementById('suspen').src = "../../assets/images/Kawasaki-1000_tail.jpeg";
            document.getElementById("price").innerText = "₹10.3 lakhs - ₹11.4 lakhs";
            break;

        case "../assets/images/kawasaki_ninja-600.png":
            document.getElementById('engn').src = "../../assets/images/Kawasaki-600_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/Kawasaki-600_gaurd.jpg";
            document.getElementById('spedo').src = "../../assets/images/Kawasaki-600_spedometer.jpg";
            document.getElementById('suspen').src = "../../assets/images/Kawasaki-600_silencer.jpg";
            document.getElementById("price").innerText = "₹10.5 lakhs - ₹11.0 lakhs";
            break;

        case "../assets/images/kawasaki_ninja-400.png":
            document.getElementById('engn').src = "../../assets/images/kawasaki-ninja-400-engine-view-439807.jpg";
            document.getElementById('hand').src = "../../assets/images/kawasaki-ninja-400_handel.jpg";
            document.getElementById('spedo').src = "../../assets/images/kawasaki-ninja-400_spedometer.jpg";
            document.getElementById('suspen').src = "../../assets/images/kawasaki-ninja-400_silencer.jpeg";
            document.getElementById("price").innerText = "From ₹4.99 lakhs";
            break;


    }
}
function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}