const menuWrapper = document.querySelector('.menu-wrapper');
const links = document.querySelectorAll('.scroll-link');
const menu = document.getElementById("mobileMenu");




links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.dataset.target; 
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });

     document.getElementById("mobileMenu").classList.remove("active");
  });
});

function toggleMenu() {
    menu.classList.toggle("active");
}


document.addEventListener('mousemove', (e) => {
    const triggerDistance = 105.5; 
if (window.innerWidth - e.clientX <= triggerDistance) {
        menu.classList.add('active'); 
} else if (e.clientX < window.innerWidth - menu.offsetWidth) {
        menu.classList.remove('active');
    }
});
