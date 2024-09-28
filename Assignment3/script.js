const images = [
    'image/pexels-goumbik-574077.jpg',
    'image/pexels-gagareen-687727-7107487.jpg',
    'image/pexels-sabrina-gelbart-65954-249798.jpg',
    'image/pexels-markusspiske-177598.jpg',
    'image/natural-photography.jpg',
    'image/sea-ocean-beach-sunset-sunrise-landscape-outdoor-water-wave-with-white-foam-beautiful-sunset-colorful-sky-with-clouds-natural-island-panoramic-background-idyllic-amazing-tropical-island-shore-photo.jpg'
];

let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById('slideshow-image');
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateImage, 2000);
updateImage();