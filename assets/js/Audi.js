
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/audi-r8.png":
            document.getElementById('engn').src = "../../assets/images/audi_r8-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/R8-interior-cabin.jpg";
            document.getElementById('spedo').src = "../../assets/images/audi_r8-sats.jpeg";
            document.getElementById('suspen').src = "../../assets/images/audi_r8-grill.png";
            document.getElementById("price").innerText = "Audi R8 Price (GST Rates) in India starts at ₹ 2.30 Crore. Check out Audi R8 Colours, Review, Images and R8 Variants On Road Price";
            break;

        case "../assets/images/Audi_a3.png":
            document.getElementById('engn').src = "../../assets/images/audi_a3-engine.png";
            document.getElementById('hand').src = "../../assets/images/audi_a3-interior.jpeg";
            document.getElementById('spedo').src = "../../assets/images/audi_a3-seats.jpeg";
            document.getElementById('suspen').src = "../../assets/images/audi_a3-sunrof.jpeg";
            document.getElementById("price").innerText = "Audi A3 price starts at ₹ 29.21 Lakh and goes upto ₹ 32.22 Lakh. The price of Petrol variant for A3 ranges between ₹ 29.21 Lakh - ₹ 31.21 Lakh";
            break;

        case "../assets/images/Audi_A4.png":
            document.getElementById('engn').src = "../../assets/images/audi_a4-engine.png";
            document.getElementById('hand').src = "../../assets/images/dashboard_audi-a4.webp";
            document.getElementById('spedo').src = "../../assets/images/audi_a4-staringwheel.webp";
            document.getElementById('suspen').src = "../../assets/images/audi_a4-spoiler.png";
            document.getElementById("price").innerText = "Audi A4 price starts at ₹ 39.99 Lakh and goes upto ₹ 47.89 Lakh. The price of Petrol version for A4 ranges between ₹ 39.99 Lakh - ₹ 47.89 Lakh.";
            break;

        case "../assets/images/audi-a6-etron-concept-5.png":
            document.getElementById('engn').src = "../../assets/images/2022-audi-a6-engine-carbuzz-551170.jpg";
            document.getElementById('hand').src = "../../assets/images/audi-a6-interior-24.jpeg";
            document.getElementById('spedo').src = "../../assets/images/audi_a6-seats.jpeg";
            document.getElementById('suspen').src = "../../assets/images/2019_audi_a6_gearshift.jpg";
            document.getElementById("price").innerText = "The price of Audi A6 starts at Rs. 58.80 Lakh and goes upto Rs. 64.70 Lakh. Audi A6 is offered in 2 variants - the base model of A6 is 45 TFSI Premium Plus ...";
            break;


    }
}


function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}