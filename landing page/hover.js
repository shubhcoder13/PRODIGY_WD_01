const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        nav.style.backgroundColor = '#333';
        nav.style.color = '#fff';
    });

    link.addEventListener('mouseout', () => {
        nav.style.backgroundColor = '#fff';
        nav.style.color = '#333';
    });
});