const productID = Number(window.location.hash.split("#").join(''));
const singleProductContainer = document.getElementById("single-product__container");
const { id, ru_name, en_name, img, descriptions, made_in } = data[productID - 1];
const scaleImgWrapper = document.getElementById("scale-img-wrapper");

singleProductContainer.innerHTML = `
<div class="single-product__description">
    <h2><strong>${ru_name} | </strong> <span>${en_name}</span></h2>
    <div class="description__list" id="description__list">
        <h4>Описание:</h4>
    </div>
    <p class="product-price"><strong>Цена:</strong> <span>договорная</span></p>
    <p class="made-in"><strong>Made in:</strong> <span>${made_in}</span></p>
    <div class="location">
        <p><strong>Локации: </strong> <span>Андижан</span>, <span>Ташкент</span></p>
        <img src="./images/location.png" alt="location" width="30">
    </div>
</div>
<div class="single-product__imgs-wrapper" id="single-product__imgs-wrapper"></div>`;

const descriptionList = document.getElementById("description__list");
const singleImgsWrapper = document.getElementById("single-product__imgs-wrapper");
document.addEventListener("DOMContentLoaded", function () {
    descriptions.map(d => {
        descriptionList.innerHTML += `<p>${d}</p>`
    });
    img.map(i => {
        singleImgsWrapper.innerHTML += `<img src="${i}" alt="${ru_name}, ${en_name}" class="single-product-img" onclick="showImage({src:'${i}', alt: '${ru_name}, ${en_name}'})"></img>`
    })
});

function showImage(obj) {
    scaleImgWrapper.style.display = "flex";
    scaleImgWrapper.innerHTML = `<img src=${obj.src} alt=${obj.alt}>`;
    scaleImgWrapper.innerHTML += `<button type="button" class="close-imgs-wrapper" onclick="closeImage()">close</button>`
}

function closeImage() {
    scaleImgWrapper.style.display = "none";
}
document.addEventListener("keypress", (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
        scaleImgWrapper.style.display = "none";
    }
})