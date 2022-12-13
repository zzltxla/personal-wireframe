const myCursor = document.querySelector("#cursor-custom");

let positionElement = (e)=> {
    let mouseY = e.clientY;
    let mouseX = e.clientX;

    myCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', positionElement);