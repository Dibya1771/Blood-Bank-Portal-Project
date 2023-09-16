const butt = document.getElementById("donor_btn");
butt.addEventListener("click", () => {
    var getcode = localStorage.getItem("notice");
    if (getcode == "Login") {
        window.location.href = "DonationForm.html";
    } else {
        alert("Want to Donate Blood. You need to first SignIn");
        window.location.href = "login.html";
    }
})

// For image sliding 
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;
let direction = 1; // 1 for forward, -1 for backward

const images = slider.querySelectorAll("img");
const imageCount = images.length;
const slideWidth = document.querySelector(".slide-container").offsetWidth;
const transitionDuration = 500; // Duration of the transition in milliseconds

function goToSlide(index) {
    if (index < 0) {
        currentIndex = imageCount - 1;
    } else if (index >= imageCount) {
        currentIndex = 0;
    }

    const translateX = -(currentIndex * slideWidth);
    slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    currentIndex += direction;
    if (currentIndex === imageCount || currentIndex < 0) {
        direction = -direction; // Change direction at the end
        currentIndex += direction; // Adjust index accordingly
    }
    const translateX = -(currentIndex * slideWidth);
    slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    slider.style.transform = `translateX(${translateX}px)`;
}

function prevSlide() {
    currentIndex += direction;
    if (currentIndex === imageCount || currentIndex < 0) {
        direction = -direction; // Change direction at the end
        currentIndex += direction; // Adjust index accordingly
    }
    const translateX = -(currentIndex * slideWidth);
    slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    slider.style.transform = `translateX(${translateX}px)`;
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto slide to the next image
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, transitionDuration + 3000); // Add 3000ms to match the delay
}

autoSlide();