
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/benze_G-wagon.png":
            document.getElementById('engn').src = "../../assets/images/Mercedes-Benz-G-Class-Engine-Bay-58254.jpg";
            document.getElementById('hand').src = "../../assets/images/Mercedes_benze-interior_G-wagon.jpeg";
            document.getElementById('spedo').src = "../../assets/images/bentley_con-gt_seats.webp";
            document.getElementById('suspen').src = "../../assets/images/Mercedes_benze-sunroof_G-wagon.jpeg";
            document.getElementById("price").innerText = "Mercedes-Benz G-Class price starts at ₹ 1.64 Crore and goes upto ₹ 2.45 Crore. The price of Diesel version for G-Class is ₹ 1.64 Crore and the price of ...";
            break;

        case "../assets/images/Benze_SUV-CGT-DR.png":
            document.getElementById('engn').src = "../../assets/images/Mercedes_Benz-engine_suv.jpg";
            document.getElementById('hand').src = "../../assets/images/mercedes_benze-suv-dashboard.jpg";
            document.getElementById('spedo').src = "../../assets/images/mercedes_benze-suv-luxury-inter.jpg";
            document.getElementById('suspen').src = "../../assets/images/mercedes_benze-suv-seats.jpeg";
            document.getElementById("price").innerText = "Mercedes-Benz CGT price starts at ₹ 1.14 Crore and goes upto ₹ 1.14 Crore. The price of Diesel version for CGT is ₹ 1.14 Crore and the price of Petrol ";
            break;

        case "../assets/images/benze_amg-gt.png":
            document.getElementById('engn').src = "../../assets/images/benze_amg-gt_ebgine.jpg";
            document.getElementById('hand').src = "../../assets/images/benze_amg-gt_interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/benze_amg-gt_tune-turbo.jpg";
            document.getElementById('suspen').src = "../../assets/images/mercedes-amg-gt-gearshit.jpg";
            document.getElementById("price").innerText = "Mercedes-Benz has launched two variants of the GT in India. These are the Mercedes-AMG GT R and the GT Roadster. While the former is priced at Rs 2.23 crore .";
            break;

        case "../assets/images/Mercedes_benze-strech.png":
            document.getElementById('engn').src = "../../assets/images/mercedes_strech-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/mercedes_strech-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/mercedes_benze_strech-staring.jpg";
            document.getElementById('suspen').src = "../../assets/images/mercedes_strech-int-tv.jpeg";
            document.getElementById("price").innerText = "Mercedes-Benz A-Class Limousine price starts at ₹ 41.54 Lakh and goes upto ₹ 43.57 Lakh. The price of Petrol version for A-Class Limousine is ₹ 41.54 Lakh and the price of Diesel version for A-Class Limousine is ₹ 43.57 Lakh.";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}