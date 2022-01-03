
function big(img) {
    document.querySelector('.big').src = img;
}
function left(color) {
    const path = document.querySelector('.path');
    path.style.background = color;
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