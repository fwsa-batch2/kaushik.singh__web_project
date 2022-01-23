
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/ktm-rc-390.png":
            document.getElementById('engn').src = "../../assets/images/KTM_390-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/KTM_390-gaurd.jpg";
            document.getElementById('spedo').src = "../../assets/images/KTM_390-lights.jpeg";
            document.getElementById('suspen').src = "../../assets/images/KTM_390-doom.jpg";
            document.getElementById("price").innerText = "₹2.53 lakhs - ₹2.64 lakhs";
            break;

        case "../assets/images/ktm-duke-250.png":
            document.getElementById('engn').src = "../../assets/images/KTM_duke-250-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/KTM_duke-250-chainloop.jpg";
            document.getElementById('spedo').src = "../../assets/images/KTM_duke-250-gaurd.jpeg";
            document.getElementById('suspen').src = "../../assets/images/KTM_duke_250-doom.jpeg";
            document.getElementById("price").innerText = "₹2.17 lakhs - ₹2.32 lakhs";
            break;

        case "../assets/images/KTM_duke-390.png":
            document.getElementById('engn').src = "../../assets/images/KTM_duke-390-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/KTM_duke-390-gaurd.jpg";
            document.getElementById('spedo').src = "../../assets/images/KTM_duke-390-doom.jpeg";
            document.getElementById('suspen').src = "../../assets/images/KTM_duke-390-silencer.jpg";
            document.getElementById("price").innerText = "₹3.17 lakhs - ₹4.32 lakhs";
            break;

        case "../assets/images/ktm_rc-200.png":
            document.getElementById('engn').src = "../../assets/images/KTM_rc_200-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/KTM_rc-200-chain.jpg";
            document.getElementById('spedo').src = "../../assets/images/KTM_rc-200-grid.jpg";
            document.getElementById('suspen').src = "../../assets/images/KTM_rc-200-silencer.jpg";
            document.getElementById("price").innerText = "₹2.04 lakhs - ₹2.11 lakhs";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}