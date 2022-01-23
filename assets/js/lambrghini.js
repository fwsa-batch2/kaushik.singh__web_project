
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/lamborghini-aventador.png":
            document.getElementById('engn').src = "../../assets/images/lamborghini-engine_adventor.png";
            document.getElementById('hand').src = "../../assets/images/lamborghini-interior_adventor.jpg";
            document.getElementById('spedo').src = "../../assets/images/lamborghini-aventador-gear-shifter-110915.jpg";
            document.getElementById('suspen').src = "../../assets/images/lamborghini-seats_adventor.jpg";
            document.getElementById("price").innerText = "Automobili Lamborghini India has introduced the Aventador S in the country at a price tag of Rs 5.01 Crore (ex-showroom, India).";
            break;

        case "../assets/images/Lamborghini_Huracan.png":
            document.getElementById('engn').src = "../../assets/images/lamborghini-engine_huracan.png";
            document.getElementById('hand').src = "../../assets/images/lamborghini-interior_huracan.jpg";
            document.getElementById('spedo').src = "../../assets/images/lamborghini-seats_huracan.jpg";
            document.getElementById('suspen').src = "../../assets/images/lamborghini-spoiler_huracan.png";
            document.getElementById("price").innerText = " Lamborghini Huracan Evo Price in India ; Mumbai, ₹ 3.58 Crore onwards ; Delhi, ₹ 3.71 Crore onwards , The Huracan has the signature low down Lambo design and has a very similar overall shape as compared to the larger Aventador coupe. It gets a low sweeping bonnet, with angular";
            break;

        case "../assets/images/Lamborghini_sian.png":
            document.getElementById('engn').src = "../../assets/images/lamborghini-engine_sian.png";
            document.getElementById('hand').src = "../../assets/images/lamborghini-staring_sian.jpeg";
            document.getElementById('spedo').src = "../../assets/images/lamborghini-seats_sian.jpeg";
            document.getElementById('suspen').src = "../../assets/images/lamborghini-lights_sian.jpeg";
            document.getElementById("price").innerText = "The Price In India The regular Sian retails for around $3.6 Million, which roughly translates to Rs 27 Crores, before taxes and duties";
            break;

        case "../assets/images/Lamborghini _urus.png":
            document.getElementById('engn').src = "../../assets/images/lamborghini-engine_urus.png";
            document.getElementById('hand').src = "../../assets/images/lamborghini-interior_urus.jpg";
            document.getElementById('spedo').src = "../../assets/images/lamborghini-seats_urus.jpeg";
            document.getElementById('suspen').src = "../../assets/images/lamborghini-sunroof_urus.jpeg";
            document.getElementById("price").innerText = "The Urus is priced from Rs 3.15 crore to Rs 3.43 crore (ex-showroom). It is available in two variants: V8 and Pearl Capsule. Lamborghini ";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}