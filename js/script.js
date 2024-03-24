document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById('burger-icon');
    const navbarList = document.getElementById('navbar-list');
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    const groupProducts__wrapper = document.getElementById("group-products__wrapper");
    const telegramQrBtn = document.getElementById("telegram-qr-btn");
    const telegramQrBtnWrapper = document.getElementById("telegram-qr-btn__wrapper");
    const closeTelegramQrCode = document.getElementById("close-telegram-qr-code");

    burgerIcon.addEventListener('click', function () {
        navbarList.style.display = 'flex'
    });

    navbarList.addEventListener("click", () => {
        if (mediaQuery.matches) {
            navbarList.style.display = 'none'
        }
    })

    mediaQuery.addEventListener('change', () => {
        if (!mediaQuery.matches) {
            navbarList.style.display = 'flex'
        } else {
            navbarList.style.display = 'none'
        }
    })

    // group products names
    group__products__data.forEach(el => {
        groupProducts__wrapper.innerHTML += `<li><a href="group-products.html#${el.id}">${el.title}</a></li>`
    });

    // show telegram qr code
    telegramQrBtn.addEventListener("click", (e) => {
        e.preventDefault();
        telegramQrBtnWrapper.style.display = 'flex';
    })

    closeTelegramQrCode.onclick = () => {
        telegramQrBtnWrapper.style.display = 'none';
    }
});