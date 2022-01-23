
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/bentley-mulsanne-ii.png":
            document.getElementById('engn').src = "../../assets/images/bentley-engine_mulasanne.jpeg";
            document.getElementById('hand').src = "../../assets/images/bentley-interior_mulsanne.jpg";
            document.getElementById('spedo').src = "../../assets/images/Bentley_mulsanne-gear.jpg";
            document.getElementById('suspen').src = "../../assets/images/bentley-mulsanne-dashboard.jpg";
            document.getElementById("price").innerText = "Bentley Mulsanne price starts at ₹ 5.56 Crore. The price of Petrol variant for Mulsanne is ₹ 5.56 Crore.";
            break;

        case "../assets/images/bentley-flying-spur.png":
            document.getElementById('engn').src = "../../assets/images/bentley_flying-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/bentley_flying-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/Bentley-Flying-Spur-Hybrid-across-rear-cabin-699x309.jpg";
            document.getElementById('suspen').src = "../../assets/images/2011-Bentley-Continental-Flying-Spur_sunroof.jpg";
            document.getElementById("price").innerText = "The price of Bentley Flying Spur starts at Rs. 3.21 Cr and goes upto Rs. 3.41 Cr. Bentley Flying Spur is offered in 2 variants - the base model of Flying ...";
            break;

        case "../assets/images/bentely_barton.png":
            document.getElementById('engn').src = "../../assets/images/bentely_barton-engine.jpg";
            document.getElementById('hand').src = "../../assets/images/bentley_barton-interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/Bentley-Barnato-new-sports-car-3.jpg";
            document.getElementById('suspen').src = "../../assets/images/bentley_barton-grill.jpeg";
            document.getElementById("price").innerText = "The Bentley Barnato India starts at Rs. 3.38 Crore Bentley Motors is the world's most sought after luxury car brand. Explore our model ranges.";
            break;

        case "../assets/images/continantal-gt_bentely.png":
            document.getElementById('engn').src = "../../assets/images/Bentley-Continental-GT_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/bentley_can-gt_interior.jpg";
            document.getElementById('spedo').src = "../../assets/images/bentley_con-gt_seats.webp";
            document.getElementById('suspen').src = "../../assets/images/2020-bentley-continental-gt_sunroof.jpg";
            document.getElementById("price").innerText = "Bentley Continental price starts at Rs 3.29 Cr in New Delhi (ex-showroom). Read Continental Reviews, view Mileage, Images, Specifications, Variants Details ...";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}