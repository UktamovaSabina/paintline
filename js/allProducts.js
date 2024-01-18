const allProducts = document.getElementById('all-products');
allProducts.innerHTML = '';

data.map(d => {
    const { id, ru_name, en_name, descriptions, img } = d;
    const heading = `${ru_name} | ${en_name}`
    return allProducts.innerHTML += `<li>
    <div>
        <img src="${img[0]}" alt="${ru_name}, ${en_name}" class="product-img">
        <div class="product-description">
            <h3>${heading}</h3>
            <p>${shortenProductDescription(null, 100, descriptions[0])}</p>
        </div>
    </div>
        <a href="./description.html#${id}" class="product-button">see more</a>
</li>`});
