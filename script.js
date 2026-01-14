// Total number of images you have
const TOTAL_IMAGES = 3; // update this when you add more

const imageElement = document.getElementById("quiz-image");
const descriptionElement = document.getElementById("description");
const revealBtn = document.getElementById("reveal-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = null;

// Your descriptions
const descriptions = {
    1: "Description for image 1 goes here.",
    2: "Description for image 2 goes here.",
    3: "Description for image 3 goes here."
};

function loadRandomImage() {
    descriptionElement.classList.add("hidden");

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * TOTAL_IMAGES) + 1;
    } while (randomIndex === currentIndex);

    currentIndex = randomIndex;

    imageElement.src = `images/pic${currentIndex}.jpg`;
    descriptionElement.textContent = descriptions[currentIndex];
}

revealBtn.addEventListener("click", () => {
    descriptionElement.classList.remove("hidden");
});

nextBtn.addEventListener("click", loadRandomImage);

// Load first image on page load
loadRandomImage();
