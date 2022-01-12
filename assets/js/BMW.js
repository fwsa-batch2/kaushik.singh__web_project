
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/s1000rr.png":
            document.getElementById('engn').src = "../../assets/images/s1000rr_engine.png";
            document.getElementById('hand').src = "../../assets/images/s1200r-spedometer.jpg";
            document.getElementById('spedo').src = "../../assets/images/s100rr_suspension.png";
            document.getElementById('suspen').src = "../../assets/images/s100rr_silencer.png";
            break;

        case "../assets/images/bmw-G310.png":
            document.getElementById('engn').src = "../../assets/images/G310-gaurd.jpg";
            document.getElementById('hand').src = "../../assets/images/G310_speodometer2.png";
            document.getElementById('spedo').src = "../../assets/images/G310_suspension.png";
            document.getElementById('suspen').src = "../../assets/images/G310-silincer.jpeg";
            break;

        case "../assets/images/BMW-1250-rpng":
            document.getElementById('engn').src = "../../assets/images/1250-engine.png";
            document.getElementById('hand').src = "../../assets/images/spedo-1250.png";
            document.getElementById('spedo').src = "../../assets/images/suspension-1250.png";
            document.getElementById('suspen').src = "../../assets/images/handelbar-1250.jpeg";
            break;

        case "../../assets/images/bmw-r1200gs.png":
            document.getElementById('engn').src = "../../assets/images/1200r engine.jpg";
            document.getElementById('hand').src = "../../assets/images/1200r-handlebar.jpeg";
            document.getElementById('spedo').src = "../../assets/images/1200r-suspension.png";
            document.getElementById('suspen').src = "../../assets/images/1200rgs_silencer.png";
            break;


    }
}

function right(background) {
    const bg = document.querySelector('.cont');
    bg.style.background = background;
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}