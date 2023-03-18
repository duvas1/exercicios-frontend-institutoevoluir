const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let index = 0;

function showImage() {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
  index++;
  if (index === images.length) {
    index = 0;
  }
}

showImage();
setInterval(showImage, 5000);