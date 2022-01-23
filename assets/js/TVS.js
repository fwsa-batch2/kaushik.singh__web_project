
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/TVS_apache-rtr-200.png":
            document.getElementById('engn').src = "../../assets/images/TVS-apache-200_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/TVS-apache-200-spedometer.webp";
            document.getElementById('spedo').src = "../../assets/images/TVS-apache-200-suspension_auyto.png";
            document.getElementById('suspen').src = "../../assets/images/TVS-apache-200-silencer.png";
            document.getElementById("price").innerText = "₹1.28 lakhs - ₹2.20 lakhs";
            break;

        case "../assets/images/TVS-apache-rr-310.png":
            document.getElementById('engn').src = "../../assets/images/Tvs-apache-rr-310_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/Tvs-apache-rr-310_doom.jpg";
            document.getElementById('spedo').src = "../../assets/images/Tvs-apache-rr-310_gaurd.jpeg";
            document.getElementById('suspen').src = "../../assets/images/Tvs-apache-rr-310_spedometer.jpg";
            document.getElementById("price").innerText = "₹2.56 lakhs - ₹3.40 lakhs";
            break;

        case "../assets/images/TVS-scooty-pep.png":
            document.getElementById('engn').src = "../../assets/images/TVS-scoty-pep_engine.png";
            document.getElementById('hand').src = "../../assets/images/TVS-scoty-pep_doom.png";
            document.getElementById('spedo').src = "../../assets/images/TVS-scoty-pep_shield.jpeg";
            document.getElementById('suspen').src = "../../assets/images/TVS-scoty-pep-spedometer.png";
            document.getElementById("price").innerText = "₹58,459- ₹62,000";
            break;

        case "../assets/images/TVS_starcity.png":
            document.getElementById('engn').src = "../../assets/images/TVS-starcity_engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/TVS-starcity_spedometer.jpeg";
            document.getElementById('spedo').src = "../../assets/images/TVS-starcity_doom.jpg";
            document.getElementById('suspen').src = "../../assets/images/tvs-star-city-plus-engine.jpg";
            document.getElementById("price").innerText = "₹72,678 - ₹80,000";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}