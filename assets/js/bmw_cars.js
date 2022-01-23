
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/Bmw_i8.png":
            document.getElementById('engn').src = "../../assets/images/bmw_i8-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/bmw_i8-interior.jpeg";
            document.getElementById('spedo').src = "../../assets/images/bmw_i8-door.jpg";
            document.getElementById('suspen').src = "../../assets/images/bmw_i8-steering.jpg";
            document.getElementById("price").innerText = "BMW i8 Review. Available in a single variant, the BMW i8 is priced at Rs 2.62 crore (ex-showroom India). Verdict.";
            break;

        case "../assets/images/bmw_m4.png":
            document.getElementById('engn').src = "../../assets/images/bmw_m4-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/bmw_m4-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/bmw_m4-staring.jpg";
            document.getElementById('suspen').src = "../../assets/images/bmw_m4-seats.jpg";
            document.getElementById("price").innerText = "BMW M4 is expected to be launched in India in February 2022 with an estimated price of Rs 1.25 Cr. Check M4 Specs, see images, ..";
            break;

        case "../assets/images/bmw_m5.png":
            document.getElementById('engn').src = "../../assets/images/bmw_m5-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/bmw_m5-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/bmw_m5-seats.jpg";
            document.getElementById('suspen').src = "../../assets/images/bmw_m5-grill.jpeg";
            document.getElementById("price").innerText = "The price of BMW M5 starts at Rs. 1.61 Cr and goes upto Rs. 1.61 Cr. BMW M5 is offered in 1 variants - the base model of M5 is Competition .";
            break;

        case "../assets/images/bmw_m8.png":
            document.getElementById('engn').src = "../../assets/images/BMW_m8-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/BMW_m8-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/BMW_m8-seats.jpeg";
            document.getElementById('suspen').src = "../../assets/images/BMW_m8-silencer.jpg";
            document.getElementById("price").innerText = "BMW M8 price is ₹ 2.17 Crore. The price of Petrol version for M8 is ₹ 2.17 Crore. Filter By.";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}