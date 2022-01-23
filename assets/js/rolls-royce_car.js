
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/Panthom_rr.png":
            document.getElementById('engn').src = "../../assets/images/phantom-v12-engine_rr.jpg";
            document.getElementById('hand').src = "../../assets/images/Panthom-interior_rr.jpeg";
            document.getElementById('spedo').src = "../../assets/images/Panthom-door-seat_rr.jpeg";
            document.getElementById('suspen').src = "../../assets/images/Panthom-grill_rr.jpeg";
            document.getElementById("price").innerText = "Rolls-Royce Phantom is a 5 seater Luxury available in a price range of Rs. 8.99 - 10.48 Cr*. It is available in 2 variants, a 6749 cc, BS6 and a single Automatic transmission.";
            break;

        case "../assets/images/Dawn_rr.png":
            document.getElementById('engn').src = "../../assets/images/Rolls_Royce_Dawn_review_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/rolls-royce-dawn-front-seats.jpg";
            document.getElementById('spedo').src = "../../assets/images/rolls-royce-dawn-stairing.jpg";
            document.getElementById('suspen').src = "../../assets/images/Dawn-umberla_rr.jpg";
            document.getElementById("price").innerText = "Rolls-Royce Dawn Black Badge6598 cc, Automatic, Petrol, 9.8 kmpl_Rs.7.85 Cr* Get On Road Price";
            break;

        case "../assets/images/Ghost_rr.png":
            document.getElementById('engn').src = "../../assets/images/Ghost_symbol.png";
            document.getElementById('hand').src = "../../assets/images/Ghost-6.5-litre-v12_rr.jpg";
            document.getElementById('spedo').src = "../../assets/images/Ghost_stari_rr.jpeg";
            document.getElementById('suspen').src = "../../assets/images/Ghost_interior_rr.png";
            document.getElementById("price").innerText = "The price of Rolls-Royce Ghost starts at Rs. 6.95 Cr and goes upto Rs. 7.95 Cr. Rolls-Royce Ghost is offered in 2 variants - the base   model of Ghost is V12";
            break;

        case "../assets/images/Wairth_rr.png":
            document.getElementById('engn').src = "../../assets/images/Wairth-engine_rr.jpg";
            document.getElementById('hand').src = "../../assets/images/Wairth-interior_rr.jpeg";
            document.getElementById('spedo').src = "../../assets/images/Warith-seats_rr.webp";
            document.getElementById('suspen').src = "../../assets/images/Wairth-umberla_rr.jpeg";
            document.getElementById("price").innerText = "Wraith is a Coupe, offered with a choice of 6592 cc Petrol engine options. For Petrol engine powered by 6592 cc on road price is ₹ 5.00 Crore.";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}