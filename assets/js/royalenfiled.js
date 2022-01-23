
function big(img) {
    document.querySelector('.big').src = img;

    switch (img) {
        case "../assets/images/Royal_Enfield_clasic-350.png":
            document.getElementById('engn').src = "../../assets/images/Royal-enfiled_clasic-350-engine.png";
            document.getElementById('hand').src = "../../assets/images/Royal-enfiled_clasic-350-doom.jpg";
            document.getElementById('spedo').src = "../../assets/images/Royal-enfiled_clasic-350-tank.jpeg";
            document.getElementById('suspen').src = "../../assets/images/Royal-enfiled_clasic-350-tank.jpeg";
            document.getElementById("price").innerText = "₹1.85 lakhs - ₹2.8 lakhs";
            break;

        case "../assets/images/Royal_Enfield-clasic-500.png":
            document.getElementById('engn').src = "../../assets/images/Royal-enfiled_500-engine.jpeg";
            document.getElementById('hand').src = "../../assets/images/Royal-enfiled_500-spedometer.jpg";
            document.getElementById('spedo').src = "../../assets/images/Royal-enfiled_500-suspension.jpg";
            document.getElementById('suspen').src = "../../assets/images/Royal-enfiled_500-tail.jpeg";
            document.getElementById("price").innerText = "₹2.86 lakhs - ₹3.10 lakhs";
            break;

        case "../assets/images/Royal_Enfield-himalayan.png":
            document.getElementById('engn').src = "../../assets/images/Royal-Enfield-himilayan_engine.jpg";
            document.getElementById('hand').src = "../../assets/images/Royal-Enfield-himilayan_silencer.jpg";
            document.getElementById('spedo').src = "../../assets/images/Royal-Enfield-himilayan_spension.jpg";
            document.getElementById('suspen').src = "../../assets/images/Royal-Enfield_himilayan_lugauage.webp";
            document.getElementById("price").innerText = "₹1.66 lakhs - ₹2.18 lakhs";
            break;

        case "../assets/images/Royal_Enfield-meteor-350.png":
            document.getElementById('engn').src = "../../assets/images/Royal-Enfield-Meteor-350-instrument-cluster.webp";
            document.getElementById('hand').src = "../../assets/images/ROyal-enfiled_meteor-350_engile.jpg";
            document.getElementById('spedo').src = "../../assets/images/Royal_enfiled-meteor-350_sidebox.jpg";
            document.getElementById('suspen').src = "../../assets/images/meteor-350-rear-mudguard.jpeg";
            document.getElementById("price").innerText = "₹1.99 lakhs - ₹2.16 lakhs";
            break;


    }
}

function toBook() {
    let imgSrc = document.getElementById('main_img').src;
    console.log(imgSrc);
    localStorage.setItem('current-img', imgSrc);
    window.location.href = "./../../pages/booking.html";
}