
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/mg_astor.png":
            document.getElementById('engn').src = "../../assets/images/MG_astro-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/MG_astro-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/MG_astro-seats.jpg";
            document.getElementById('suspen').src = "../../assets/images/MG_astro-dashbord.jpg";
            document.getElementById("price").innerText = "The price of MG Astor starts at Rs. 9.98 Lakh and goes upto Rs. 17.72 Lakh. MG Astor is offered in 12 variants - the base model of Astor is Style and the .";
            break;

        case "../assets/images/mg_X-motion.png":
            document.getElementById('engn').src = "../../assets/images/MG_X-motion-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/MG_X-motion-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/MG_X-motion-seats.jpg";
            document.getElementById('suspen').src = "../../assets/images/MG_X-motion-dashbord.jpg";
            document.getElementById("price").innerText = "MG X-motion price starts from Rs. 9.98 Lakh  to Rs. 38.99 Lakh for X-motion. MG offers a total of five products which are Petrol , Diesel and Electric .";
            break;

        case "../assets/images/Mg_hetor.png":
            document.getElementById('engn').src = "../../assets/images/MG_hector-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/MG_hector-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/MG_hector-sunroof.jpeg";
            document.getElementById('suspen').src = "../../assets/images/MG_hector-seats.jpg";
            document.getElementById("price").innerText = "MG Hector Price: The SUV is priced between Rs 13.95 lakh and Rs 20.11 lakh (ex-showroom, pan-India). MG Hector Variants: It is available in four trims: Style, .";
            break;

        case "../assets/images/gloster-exterior_MG.png":
            document.getElementById('engn').src = "../../assets/images/MG_gloster-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/MG_gloster-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/MG_gloster-seats.jpg";
            document.getElementById('suspen').src = "../../assets/images/MG_gloster-double-silencer.jpeg";
            document.getElementById("price").innerText = "The price of MG Gloster starts at Rs. 30.99 Lakh and goes upto Rs. 38.99 Lakh. MG Gloster is offered in 6 variants - the base model of Gloster is Super ..";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}