
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/ducati_paniga-V4.png":
            document.getElementById('engn').src = "../../assets/images/ducati_paniga-v4-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/ducati_paniga-v4-doom.webp";
            document.getElementById('spedo').src = "../../assets/images/ducati_Panigale_V4R-fan.jpg";
            document.getElementById('suspen').src = "../../assets/images/ducati_paniga-v4-silencer.jpeg";
            document.getElementById("price").innerText = "₹22.7 lakhs - ₹57.2 lakhs";
            break;

        case "../assets/images/ducati_paniga-V2.png":
            document.getElementById('engn').src = "../../assets/images/ducati_paniga-v2-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/ducati_paniga-v2-doom.jpg";
            document.getElementById('spedo').src = "../../assets/images/ducati_paniga-v2-seat.jpeg";
            document.getElementById('suspen').src = "../../assets/images/ducati_paniga-v2-suspension.jpg";
            document.getElementById("price").innerText = "₹17.5 lakhs - ₹17.7 lakhs";
            break;

        case "../assets/images/ducati_monsters.png":
            document.getElementById('engn').src = "../../assets/images/ducati_monster-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/ducati_monster-grid.jpeg";
            document.getElementById('spedo').src = "../../assets/images/ducati_monster-silencer.jpg";
            document.getElementById('suspen').src = "../../assets/images/ducati_monster-fan.jpg";
            document.getElementById("price").innerText = "₹8.6 lakhs - ₹24.8 lakhs";
            break;

        case "../assets/images/ducati_italic-garage.png":
            document.getElementById('engn').src = "../../assets/images/ducati_italic-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/ducati_italic-fan.jpg";
            document.getElementById('spedo').src = "../../assets/images/ducati_italic-part.png";
            document.getElementById('suspen').src = "../../assets/images/ducati_italic-silencer.webp";
            document.getElementById("price").innerText = "₹18.8 lakhs - ₹30 lakhs";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}