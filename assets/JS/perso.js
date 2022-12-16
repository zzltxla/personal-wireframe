const myCursor = document.querySelector("#cursor-custom");

let positionElement = (e)=> {
    let mouseY = e.clientY;
    let mouseX = e.clientX;

    myCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', positionElement);
//cursor function region ends here

let slides = document.querySelectorAll(".slide-img");
let slideIndex = 1;
let eventMoveX = client.X

showSlides(slideIndex);
function changeSlides(n) {
    showSlides((slideIndex += n));
}
function currentSlide(n) {
    showSlides((slideIndex = n));
}
function showSlides(n) {
    let i;
    let slides = document.getElementById("slide");
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }
    Array.from(slides).forEach(item => (item.style.display = "none"));
    slides[slideIndex - 1].style;display = "block";
}



slides.addEventListener('afterbegin', `${eventMoveX}`, () => 
    changeSlides(1) 
);