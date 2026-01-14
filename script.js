// Total number of quiz items (pairs)
const TOTAL_QUIZZES = 3; // update as you add more

const imageElement = document.getElementById("quiz-image");
const descriptionElement = document.getElementById("description");
const revealBtn = document.getElementById("reveal-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuiz = null;

// Descriptions shared by each image pair
const descriptions = {
    1: `In the far north, wildfires are breaking old patterns. Satellite data show that wildland fires once scattered across the Arctic are now surging in numbers—particularly in northern Eurasia—and many are burning more intensely than before.

These maps show the number of fires detected by the MODIS (Moderate Resolution Imaging Spectroradiometer) sensors on NASA’s Aqua and Terra satellites. The map on the left shows fire detections from 2002 to 2012 (yellow), while the map on the right shows detections from 2012 to 2024 (orange). The largest circles indicate areas with 15,000 or more detected fires, while the smallest circles represent areas with 1,000 or fewer. Fire detection data are from NASA’s Fire Information for Resource Management System (FIRMS).

Although the geographical distribution of high-latitude wildfires varies from year to year, the maps reveal some clear long-term patterns. In the 2000s, fires north of 60 degrees latitude appeared across both North America and Eurasia, but starting in the early 2010s, their numbers skyrocketed, most dramatically in Eurasia.

Researchers attribute these trends to rising temperatures, which have made northern landscapes more flammable, along with a poleward expansion of lightning—the primary ignition source for these fires.`,

    2: `Summer is usually peak tourism season in Argentina’s Chubut province, a time when hikers and sightseers arrive to explore glacial lakes and cirques, alpine valleys, and towering forests. In January 2026, however, some visitors to the remote Patagonian region instead found themselves fleeing raging wildland fires.

On January 8, 2026, the MODIS on NASA’s Aqua satellite captured this image of smoke billowing from two large fires burning in and around Los Alerces National Park, a UNESCO World Heritage site.

Satellite-based estimates indicate that fires charred more than 175 square kilometers across Patagonia between January 5 and 8.

News outlets reported that at least 3,000 tourists had to be evacuated from a lake resort near Lago Epuyén.`,

    3: `Winter weather took hold across the Indo-Gangetic Plain in early January 2026, bringing dense fog and cold temperatures to much of the flat, fertile lands that span from Pakistan and northern India to Bangladesh.

This image shows low-lying clouds over the delta on the morning of January 6, captured by the MODIS on NASA’s Terra satellite.

While it appears scenic from above, foggy conditions can pose hazards and disrupt daily life. Dense fog caused major travel delays at airports and on roads and railways across the region.`
};

function loadRandomQuiz() {
    descriptionElement.classList.add("hidden");

    let randomQuiz;
    do {
        randomQuiz = Math.floor(Math.random() * TOTAL_QUIZZES) + 1;
    } while (randomQuiz === currentQuiz);

    currentQuiz = randomQuiz;

    // Randomly choose between picX.jpg or picXa.jpg
    const imageVariant = Math.random() < 0.5 ? "" : "a";
    imageElement.src = `images/pic${currentQuiz}${imageVariant}.jpg`;

    descriptionElement.textContent = descriptions[currentQuiz];
}

revealBtn.addEventListener("click", () => {
    descriptionElement.classList.remove("hidden");
});

nextBtn.addEventListener("click", loadRandomQuiz);

// Load first quiz on page load
loadRandomQuiz();
