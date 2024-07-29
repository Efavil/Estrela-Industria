const images = [
    './img/test.jpg',
    './img/serralheiro-cortando-metal.jpg',
    './img/test2.jpg'
];

let currentIndex = 0;
const container = document.querySelector('#Image');

if (container) {
    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        container.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    container.style.backgroundImage = `url('${images[currentIndex]}')`;
    setInterval(changeBackgroundImage, 4000);
} else {
    console.error('Elemento com id "Image" não encontrado.');
}

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu-hamb');

    if (menuIcon && menu) {
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
    }

    const image1 = document.querySelector('#Card-Image-1');
    const image2 = document.querySelector('#Card-Image-2');
    const p1 = document.querySelector('#P-1');
    const p2 = document.querySelector('#P-2');

    if (image1) {
        image1.addEventListener('click', function() {
            image1.style.display = 'none';
            setTimeout(function() {
                image1.style.display = 'flex';
            }, 10000); // Corrigido para setTimeout
        });
    }

    if (image2) {
        image2.addEventListener('click', function() {
            image2.style.display = 'none';
            setTimeout(function() {
                image2.style.display = 'flex';
            }, 7000); // Corrigido para setTimeout
        });
    }
});
