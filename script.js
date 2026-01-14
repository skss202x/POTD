// Total number of images you have
const TOTAL_IMAGES = 3; // update this when you add more

const imageElement = document.getElementById("quiz-image");
const descriptionElement = document.getElementById("description");
const revealBtn = document.getElementById("reveal-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = null;

// Your descriptions
const descriptions = {
    1: "In the far north, wildfires are breaking old patterns. Satellite data show that wildland fires once scattered across the Arctic are now surging in numbers—particularly in northern Eurasia—and many are burning more intensely than before.

These maps show the number of fires detected by the MODIS (Moderate Resolution Imaging Spectroradiometer) sensors on NASA’s Aqua and Terra satellites. The map on the left shows fire detections from 2002 to 2012 (yellow), while the map on the right shows detections from 2012 to 2024 (orange). The largest circles indicate areas with 15,000 or more detected fires, while the smallest circles represent areas with 1,000 or fewer. Fire detection data are from NASA’s Fire Information for Resource Management System (FIRMS).

Although the geographical distribution of high-latitude wildfires varies from year to year, the maps reveal some clear long-term patterns. In the 2000s, fires north of 60 degrees latitude appeared across both North America and Eurasia, but starting in the early 2010s, their numbers skyrocketed, most dramatically in Eurasia. Even the icy island of Greenland entered a new fire regime during this period, experiencing more large fires, though still too few to be visible on these maps.

Researchers attribute these trends to rising temperatures, which have made northern landscapes more flammable, along with a poleward expansion of lightning—the primary ignition source for these fires. The findings are detailed in a report published in 2025 by the Arctic Monitoring and Assessment Programme (AMAP), a working group of the Arctic Council.

The number of fire detections and their distribution, however, is just one metric of the Arctic’s changing fire regime. According to NASA researchers, fires in this region are also burning larger, hotter, and longer than they did in previous decades.

Fire has always been a part of the boreal and the Arctic landscape,” said Jessica McCarty, Deputy Earth Science Division Chief at NASA’s Ames Research Center and lead author of the report. “But now it's starting to act in more extreme ways that mimic what we've seen in the temperate and the tropical areas.",
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
