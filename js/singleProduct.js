const productID = Number(window.location.hash.split("#").join(''));
const singleProductContainer = document.getElementById("single-product__container");
const { id, ru_name, en_name, img, price, descriptions, made_in } = data[productID - 1];

singleProductContainer.innerHTML = `
<div class="single-product__description">
    <h2><strong>${ru_name} | </strong> <span>${en_name}</span></h2>
    <div class="description__list" id="description__list">
        <h4>Описание:</h4>
    </div>
    <p class="product-price"><strong>Цена:</strong> <span>$${price}</span></p>
    <p class="made-in"><strong>Made in:</strong> <span>${made_in}</span></p>
    <div class="location">
        <p><strong>Локации: </strong> <span>Андижан</span>, <span>Ташкент</span></p>
        <img src="./images/location.png" alt="location" width="30">
    </div>
</div>
<img src="${img[0]}" alt="${ru_name}, ${en_name}" class="single-product-img"></img>`;

const descriptionList = document.getElementById("description__list");
document.addEventListener("DOMContentLoaded", function () {
    descriptions.map(d => {
        descriptionList.innerHTML += `<p>${d}</p>`
    })
});