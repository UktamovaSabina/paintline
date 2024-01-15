document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById('burger-icon');
    const navbarList = document.getElementById('navbar-list');
    const mediaQuery = window.matchMedia('(max-width: 700px)');

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
});