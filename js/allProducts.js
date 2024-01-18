const allProducts = document.getElementById('all-products');
allProducts.innerHTML = '';

data.map(d => {
    const { id, ru_name, en_name, descriptions, img, price } = d;
    const heading = `${ru_name} | ${en_name}`
    return allProducts.innerHTML += `
<li>
    <img src="${img[0]}" alt="${ru_name}, ${en_name}" class="product-img">
        <div class="product-description">
            <div class="product-description__heading">
                <h3>${shortenProductDescription(null, 40, heading)}</h3>
            </div>
            <p>${shortenProductDescription(null, 100, descriptions[0])}</p>
            <a href="./description.html#${id}" class="product-button">see more</a>
        </div>
</li>`});
