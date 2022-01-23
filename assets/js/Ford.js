
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/Ford_ecosport.png":
            document.getElementById('engn').src = "../../assets/images/Ford-engine_ecosport.png";
            document.getElementById('hand').src = "../../assets/images/Ford_EcoSport_interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/Ford-seats_ecosport.jpeg";
            document.getElementById('suspen').src = "../../assets/images/Sunroof-Ford_ecosport.jpg";
            document.getElementById("price").innerText = "Ford EcoSport price starts at ₹ 8.19 Lakh and goes upto ₹ 11.70 Lakh. The price of Petrol version for EcoSport ranges between ₹ 8.19 Lakh - ₹ 11.40 Lakh and the price of Diesel version for EcoSport ranges between ₹ 8.89 Lakh - ₹ 11.70 Lakh.";
            break;

        case "../assets/images/Ford_endour.png":
            document.getElementById('engn').src = "../../assets/images/Ford-engine_endrover.png";
            document.getElementById('hand').src = "../../assets/images/seats-Ford_endrover.webp";
            document.getElementById('spedo').src = "../../assets/images/Ford-gear_endrover.jpeg";
            document.getElementById('suspen').src = "../../assets/images/endeavour-interior-dashboard-2.jpeg";
            document.getElementById("price").innerText = "Ford Endeavour Price: Ford retails the full-size SUV from ₹ 29.99 lakh to ₹ 36.25 lakh (ex-showroom Delhi). Ford Endeavour Variants: It is available in four ...";
            break;

        case "../assets/images/Ford_evous.png":
            document.getElementById('engn').src = "../../assets/images/Ford-evous_engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/Ford-stair_evos.jpg";
            document.getElementById('spedo').src = "../../assets/images/Ford-EVOS-smart-cabin.jpg";
            document.getElementById('suspen').src = "../../assets/images/burlappcar-ford-evos-2.jpg";
            document.getElementById("price").innerText = "Ford an all-new Evos at the 2021 Auto Shanghai which  like the Citroen C5 X  debuts a unique estate-crossover combination body style. Specific to the Chinese market, for now, the Evos also has another highlight  4K resolution touchscreen that measures 27 inches.  ₹ 9.00 Lakh -  ₹ 11.10 Lakh ";
            break;

        case "../assets/images/ford_mustang.png":
            document.getElementById('engn').src = "../../assets/images/Ford-engine_mustang.jpeg";
            document.getElementById('hand').src = "../../assets/images/mustang_logo.jpg";
            document.getElementById('spedo').src = "../../assets/images/Ford-Mustang-Interior-74331.jpg";
            document.getElementById('suspen').src = "../../assets/images/mustang-seats_ford.jpeg";
            document.getElementById("price").innerText = "Ford Mustang Price: Ford Mustang price starts at ₹ 74.61 Lakh. The price of Petrol variant for Mustang is ₹ 74.61 Lakh.Mustang is available in 1 variants. All the variants are Automatic";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}