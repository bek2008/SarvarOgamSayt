const slides = document.querySelectorAll(".slides video");
const descriptions = document.querySelectorAll(".description");
let slideIndex = 0;
let intervalId = null;
let number = document.getElementById("number");
document.addEventListener("DOMContentLoaded", intilizeSlider);
let count;

function intilizeSlider(){
        
        if(slides.length > 0){
                slides[slideIndex].classList.add("displaySlide");
                descriptions[slideIndex].classList.add("displaySlide");
        }
}
function showSlide(index){
        
        if(index >= slides.length){
                slideIndex = 0;
        }
        else if(index < 0){
                slideIndex = slides.length - 1;
        }

        slides.forEach(slide => {
                slide.classList.remove("displaySlide");
        });
        descriptions.forEach(description => {
                description.classList.remove("displaySlide");
        });

        slides[slideIndex].classList.add("displaySlide");
        descriptions[slideIndex].classList.add("displaySlide");

}
function prevSlide(){
        clearInterval(intervalId);
        slideIndex--;
        showSlide(slideIndex);
        number.textContent = slideIndex + 1;
}
function nextSlide(){
        slideIndex++;
        showSlide(slideIndex);
        number.textContent = slideIndex + 1;
}