const productID = Number(window.location.hash.split("#").join(''));
const singleProductContainer = document.getElementById("single-product__container");
const { id, ru_name, en_name, img, descriptions, made_in } = data[productID - 1];
const scaleImgWrapper = document.getElementById("scale-img-wrapper");
const dataImgLength = img.length;
let scaledImg;
let showImgIndex;

// single product description
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

let descriptionList;
let singleImgsWrapper;

// single product all paragraphs and images
document.addEventListener("DOMContentLoaded", function () {
    descriptionList = document.getElementById("description__list");
    singleImgsWrapper = document.getElementById("single-product__imgs-wrapper");
    descriptions.map(d => {
        descriptionList.innerHTML += `<p>${d}</p>`
    });
    img.map((i, index) => {
        singleImgsWrapper.innerHTML += `
        <img src="${i}" alt="${ru_name}, ${en_name}" class="single-product-img" onclick="showImage({src:'${i}', alt: '${ru_name}, ${en_name}', id: ${index}})"></img>`
    })
});

// scaling clicked image
function showImage(obj) {
    showImgIndex = obj.id;
    scaleImgWrapper.style.display = "flex";
    scaleImgWrapper.innerHTML = `<span class="prev-btn" onclick="showPrevImg()">prev</span><img src="${obj.src}" alt="${obj.alt}" id="scaled-img"><span class="next-btn"  onclick="showNextImg()">next</span>`;
    scaleImgWrapper.innerHTML += `<button type="button" class="close-imgs-wrapper" onclick="closeImage()">close</button>`;
    scaledImg = document.getElementById("scaled-img");
}

// close scaled image
function closeImage() {
    scaleImgWrapper.style.display = "none";
};


function showPrevImg() {
    if (showImgIndex === 0) {
        showImgIndex = (img.length - 1);
    } else {
        showImgIndex -= 1;
    }
    scaledImg.src = img[showImgIndex]
};

function showNextImg() {
    if ((dataImgLength - 1) === showImgIndex) {
        showImgIndex = 0;
    } else {
        showImgIndex += 1;
    }
    scaledImg.src = img[showImgIndex]
};

document.addEventListener("keypress", (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
        scaleImgWrapper.style.display = "none";
    }
})