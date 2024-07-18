const images = [
    '../img/test.jpg',
    '../img/metalurgica-10.jpg'
    ,'../img/test2.jpg'
];

let currentIndex = 0;
const container = document.getElementById('Image');

if (container) {
    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        container.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    setInterval(changeBackgroundImage, 4000);
    container.style.backgroundImage = `url(${images[currentIndex]})`;
} else {
    console.error('Elemento com id "Image" não encontrado.');
}


document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu-hamb');

    menu.style.display = "none";
    
    menuIcon.addEventListener('click', function() {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });

    window.addEventListener('scroll', function() {
        menu.style.display = "none";
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 993) {
            menu.style.display = "none";
        }
    });
});