const images = [
    '../img/test.jpg',
    '../img/Metalurgica.jpg'
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
