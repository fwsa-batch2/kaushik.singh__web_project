function onPageLoad() {
    const bikeImg = localStorage.getItem('current-img');
    document.getElementById('bike-img').src = bikeImg;
}
onPageLoad();
