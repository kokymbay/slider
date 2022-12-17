let offset = 0;
const sliderLine = document.querySelector('.slider-line'); 

document.querySelector('.slider-next').addEventListener('click', function() {
    
    offset = offset + 455;
    if (offset > 910) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'; 
   
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 455;
    if (offset < 0) {
        offset = 910;
    }
    sliderLine.style.left = -offset + 'px'; 
   
});