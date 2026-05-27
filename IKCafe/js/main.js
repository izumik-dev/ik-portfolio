const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.navi-list');
const links = document.querySelectorAll('.navi-list li');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('open');
    navi.classList.toggle('open');
    overlay.classList.toggle('open');
});

links.forEach(link =>{
    link.addEventListener('click',()=>{
        hamburger.classList.remove('open');
        navi.classList.remove('open');
        overlay.classList.remove('open');
    });
});

