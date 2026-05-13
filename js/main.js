const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navi.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.toggle('menu-open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navi.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.toggle('menu-open');

    });

});