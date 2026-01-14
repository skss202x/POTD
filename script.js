// Total number of quiz items (pairs)
const TOTAL_QUIZZES = 5; // update as you add more

const imageElement = document.getElementById("quiz-image");
const descriptionElement = document.getElementById("description");
const revealBtn = document.getElementById("reveal-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuiz = null;

// Descriptions shared by each image pair
const descriptions = {
    1: `Fires on the Rise in the Far North - In the far north, wildfires are breaking old patterns. Satellite data show that wildland fires once scattered across the Arctic are now surging in numbers—particularly in northern Eurasia—and many are burning more intensely than before.
These maps show the number of fires detected by the MODIS (Moderate Resolution Imaging Spectroradiometer) sensors on NASA’s Aqua and Terra satellites. The map on the left shows fire detections from 2002 to 2012 (yellow), while the map on the right shows detections from 2012 to 2024 (orange). The largest circles indicate areas with 15,000 or more detected fires, while the smallest circles represent areas with 1,000 or fewer. Fire detection data are from NASA’s Fire Information for Resource Management System (FIRMS).
Although the geographical distribution of high-latitude wildfires varies from year to year, the maps reveal some clear long-term patterns. In the 2000s, fires north of 60 degrees latitude appeared across both North America and Eurasia, but starting in the early 2010s, their numbers skyrocketed, most dramatically in Eurasia. Even the icy island of Greenland entered a new fire regime during this period, experiencing more large fires, though still too few to be visible on these maps.
Researchers attribute these trends to rising temperatures, which have made northern landscapes more flammable, along with a poleward expansion of lightning—the primary ignition source for these fires. The findings are detailed in a report published in 2025 by the Arctic Monitoring and Assessment Programme (AMAP), a working group of the Arctic Council.
The number of fire detections and their distribution, however, is just one metric of the Arctic’s changing fire regime. According to NASA researchers, fires in this region are also burning larger, hotter, and longer than they did in previous decades.`,

    2: `Fire Threatens Rare Forests in Argentina - Summer is usually peak tourism season in Argentina’s Chubut province, a time when hikers and sightseers arrive to explore glacial lakes and cirques, alpine valleys, and towering forests. In January 2026, however, some visitors to the remote Patagonian region instead found themselves fleeing raging wildland fires.
On January 8, 2026, the MODIS (Moderate Resolution Imaging Spectroradiometer) on NASA’s Aqua satellite captured this image of smoke billowing from two large fires burning in and around Los Alerces National Park, a UNESCO World Heritage site. NASA satellites began detecting widespread fire activity in the area on January 6.
The more southerly blaze was spreading east on ridges between Lago Rivadavia, Lago Futalaufquen, and Lago Menéndez; the more northerly fire was burning on steep hillsides around Lago Epuyén. All of the lakes occupy U-shaped glacial troughs, valleys with unusually flat bases and steep sides carved by glacial and periglacial erosion. Satellite-based estimates from the Global Wildfire Information System indicate that fires charred more than 175 square kilometers (67 square miles) across Patagonia between January 5 and 8.
The ridges are blanketed with temperate Patagonian Andean forest, including sections of Valdivian rainforest, with rare stands of alerce (Fitzroya cupressoides). A type of cypress, these huge, slow-growing conifers are the second-longest-lived trees on Earth, with some surviving for more than 3,600 years. According to UNESCO documents, Los Alerces National Park protects 36 percent of Argentina’s alerce forests, including stands with the greatest genetic variability on the eastern slopes of the Andes. The park’s forests also contain exclusive genetic variants and the oldest individuals in the country.
News outlets and the national park reported challenging weather conditions for firefighters on the ground, who faced high temperatures, low humidity, and strong winds in recent days. Standardized Precipitation Index data from the National Integrated Drought Information System show that unusually dry conditions over the past several months have likely primed vegetation to burn. News outlets reported that at least 3,000 tourists had to be evacuated from a lake resort near Lago Epuyén.`,

    3: `Ganges Delta Under a Winter Shroud of Fog - Winter weather took hold across the Indo-Gangetic Plain in early January 2026, bringing dense fog and cold temperatures to much of the flat, fertile lands that span from Pakistan and northern India to Bangladesh.
This image shows low-lying clouds over the delta on the morning of January 6, captured by the MODIS (Moderate Resolution Imaging Spectroradiometer) on NASA’s Terra satellite. Dense fog, particularly radiation fog, is common this time of year, forming when ground temperatures are cool, winds are light, and moisture is abundant near the surface. The meteorological departments of both Bangladesh and India called for moderate to very dense fog over the region that day amid an ongoing cold wave.
Other relatively low-level clouds extend from the land areas and over the Bay of Bengal. These long, parallel bands of clouds, known as cloud streets, can form when cold air passes over warmer open water, gaining heat and moisture. Rising thermals ascend until they reach a temperature inversion that acts like a lid, forcing the air to roll into long, parallel rotating cylinders. Clouds develop where the air rises, while clear skies appear where the air sinks.
While it appears scenic from above, foggy conditions can pose hazards and snarl daily life for people on the ground. For instance, dense fog early in the month caused major disruptions at the international airport in Dhaka, according to local news reports. Similar disruptions, along with travel delays on roads and railways, were reported in parts of northern, central, and eastern India.`,

    4: `Meltwater Turns Iceberg A-23A Blue - The year that iceberg A-23A first broke away from Antarctica's Filchner Ice Shelf, Ronald Reagan was president of the United States, and the movie Top Gun was setting box office records. Forty years later, the massive tabular berg—one of the largest and longest-lived bergs ever tracked by scientists—is sopping with blue meltwater and on the verge of complete disintegration as it drifts in the South Atlantic between the eastern tip of South America and South Georgia island.
When it first detached from Antarctica in 1986, the berg was nearly twice the size of Rhode Island—about 4,000 square kilometers. Estimates from the U.S. National Ice Center put the berg's area at 1,182 square kilometers (456 square miles) in early January 2026, following the breakup of several sizable pieces in July, August, and September of 2025 as it moved into relatively warm summer conditions by December.
The MODIS image suggests that the ailing iceberg has also sprung a leak. The white area to its left may be the result of what scientists described as a "blowout."`,

    5: `Plants and Algae Swirl Across a South African Reservoir - On clear days in Hartbeespoort, South Africa, satellite images often reveal a reservoir with shades of deep blue interrupted by drifting patches of vivid green. Over the years, these shifting features have included algae blooms—which can affect water quality, ecosystems, and nearby human communities.
In this animation, from June 2022 to July 2023, aquatic plants proliferate, move around the reservoir, and then fade. The animation is composed of images from Harmonized Landsat and Sentinel-2 (HLS), a NASA product that combines imagery from the NASA/USGS Landsat 8 and Landsat 9 satellites and the European Space Agency’s Sentinel-2A, 2B, and 2C satellites.
The green masses can also contain varying amounts of algae, an umbrella term for photosynthetic organisms that live in water, encompassing everything from single-celled cyanobacteria to seaweed. They play a vital role in maintaining healthy ecosystems.`

    6: `Reaching the Precipice in Angola - In southwestern Angola, an expanse of coastal plains comes to an abrupt end at a natural barrier. The Huíla plateau soars above the lowlands to elevations of around 2,300 meters (7,500 feet). The sharp transition results in dramatic landscapes and a sudden change from an arid environment to more-temperate climes.  
The serrated edge of the Huíla plateau zigzags through this image, which is a mosaic of scenes acquired on June 19 and 20, 2025, with the OLI-2 (Operational Land Imager-2) and OLI on the Landsat 9 and Landsat 8 satellites, respectively. Areas around the plateau’s edges appear green with vegetation. But the landscape tends to look much browner by late September, at the end of the region’s dry season, during which almost no rain falls.  

This topography is part of the Great Escarpment of southern Africa, a 5,000-kilometer-long feature running roughly parallel to the continent’s edge. From Angola, it extends south through Namibia, across South Africa, and then northeast into Zimbabwe and Mozambique. The image below, acquired with the VIIRS (Visible Infrared Imaging Radiometer Suite) on the Suomi NPP satellite, shows a longer segment of the escarpment in Angola. Scientists believe the escarpment formed after the breakup of the supercontinent Gondwana in the Jurassic period. Since then, erosion has worn away at the continental margin such that the escarpment now sits 50 to 200 kilometers (30 to 120 miles) back from the coast.  

This Angolan section of the escarpment features dizzying, yet beautiful, landscapes. Tundavala Gap, a gouge eroded into the cliff line, is one of the most iconic with its well-framed view of the plains below. The precipice also presents a substantial obstacle to transportation. A stretch of the Namibe-Lubango Road overcomes this challenge with a series of scenic hairpin turns climbing to Serra da Leba pass near the town of Leba.`,

    7: `An Amphitheater of Rock at Cedar Breaks - When people stand at the rim of the amphitheater in Utah's Cedar Breaks National Monument and look down on an otherworldly landscape of multicolored rock spires, pinnacles, and other geologic oddities, they're looking across tens of millions of years of Earth's history. The same can be said when viewing the bowl-shaped escarpment from space.
The OLI-2 (Operational Land Imager-2) on Landsat 9 captured this view of the amphitheater's semicircular rim and deeply eroded drainages on June 18, 2025. The erosive power of water from Ashdown Creek and several tributaries, along with relentless physical and chemical weathering, is evident in the many channels, cliffs, and canyons that radiate outward from the rim and define the escarpment and amphitheater.

The feature's striking rock formations are composed of sedimentary rock layers laid down roughly 50 to 25 million years ago within a basin that, at times, held a large body of water called Lake Claron. Many of the amphitheater's limestone layers began as sediments that settled on its lakebed as carbonate-rich muds.

Differences in rock type and color, evident in the layering seen in ground photographs and to a degree in Landsat images, reflect differences in environmental conditions during deposition. Lake Claron, for instance, was sometimes quite deep, but during dry periods it was shallow or nonexistent. In wet conditions, iron in muddy sediments was scarce or had too little exposure to oxygen to oxidize, or rust, leaving the resulting rock white or gray. During drier periods, iron in sediments had greater exposure to oxygen, forming minerals that turned layers red and orange. 

After deposition, slow-moving tectonic forces lifted all these rock layers upward, ultimately putting them at the top of the Grand Staircase—an immense sedimentary sequence that stretches south from Cedar Breaks and Bryce Canyon, through Grand Staircase-Escalante National Monument and Zion Canyon, and finally into the Grand Canyon. Younger rock layers are found at the top of the sequence and older layers at the bottom.

The rim at Cedar Breaks, the top of the staircase, sits about 10,000 feet (3,000 meters) above sea level, roughly 7,000 feet above the Colorado River in the Grand Canyon. The high elevation influences everything from the weather to the plants and animals that live there. Winters are long, cold, and snowy, with nearby Brian Head seeing 30 feet (10 meters) of snowfall each year on average.

While the cool temperatures and short growing season are an impediment to many types of vegetation, the slow-growing and notoriously long-lived bristlecone pines found along the escarpment's rim use the harsh conditions to their advantage. Slow growth makes their wood unusually dense, which protects the trees from disease and insects. Likewise, their ability to survive in thin soils, on mostly barren limestone outcrops where little else can grow, protects them from wildfires. Some of the oldest bristlecones in the monument are more than 1,700 years old.

Sitting atop the sedimentary layers, signs of a more volcanically active period also appear in the image. The dark basaltic lava flows visible to the east of the amphitheater formed between 5 million and 10,000 years ago, when several volcanoes on the Markagunt Plateau erupted regularly. Areas of soft, gray rock around the summit of Brian Head—now the site of a ski resort—formed when pyroclastic flows left deposits of tuff strewn across the landscape.`



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
