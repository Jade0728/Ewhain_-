const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);