const productID = Number(window.location.hash.split("#").join(''));
const { title, desc, sub_products } = group__products__data[productID - 1];
const groupProductsPage__heading = document.getElementById("group-products-page__heading");
const groupProductsPage__paragraph = document.getElementById("group-products-page__paragraph");
const groupProductsPage__list = document.getElementById("group-products-page__list");

groupProductsPage__heading.innerHTML = `Группы Продуктов: <span>${title}</span>`;
groupProductsPage__paragraph.innerHTML = desc;

sub_products.forEach(el => {
    groupProductsPage__list.innerHTML += `<li>
    <dl>
        <dt>${el.title}</dt>
        <dd>${el.desc}</dd>
    </dl>
    </li>`
})
