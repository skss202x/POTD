/* ================================
   QUIZ CONFIG
================================ */

// Image files must exist as:
// images/pic1.jpg, images/pic1a.jpg ... etc

const quizzes = [
  {
    id: 1,
    description: `Fires on the Rise in the Far North - In the far north, wildfires are breaking old patterns. Satellite data show that wildland fires once scattered across the Arctic are now surging in numbers—particularly in northern Eurasia—and many are burning more intensely than before.

These maps show the number of fires detected by the MODIS sensors on NASA’s Aqua and Terra satellites. The left map shows detections from 2002–2012; the right from 2012–2024.

Rising temperatures and a poleward expansion of lightning have made Arctic landscapes more flammable. Fires are now burning larger, hotter, and longer than in previous decades.`
  },
  {
    id: 2,
    description: `Fire Threatens Rare Forests in Argentina - In January 2026, wildfires burned in and around Los Alerces National Park in Patagonia, threatening rare alerce forests—some trees over 3,600 years old.

Dry conditions, strong winds, and steep terrain made firefighting difficult. Satellite data showed more than 175 square kilometers burned, forcing thousands of tourists to evacuate.`
  },
  {
    id: 3,
    description: `Ganges Delta Under a Winter Shroud of Fog - Dense winter fog blanketed the Indo-Gangetic Plain in early January 2026, disrupting transportation across India and Bangladesh.

Radiation fog formed due to cool ground temperatures, light winds, and high moisture. Cloud streets over the Bay of Bengal formed as cold air passed over warmer water.`
  },

  {
    id: 4,
    description: `Meltwater Turns Iceberg A-23A Blue - Iceberg A-23A, one of the longest-tracked icebergs, is disintegrating after four decades.

Once nearly twice the size of Rhode Island, the iceberg has shrunk dramatically. Blue meltwater pools signal advanced structural decay as it drifts in warmer South Atlantic waters.`
  },

  {
    id: 5,
    description: `Plants and Algae Swirl Across a South African Reservoir - Satellite imagery reveals drifting mats of aquatic plants and algae in Hartbeespoort Reservoir.

These blooms affect water quality and ecosystems and are tracked using combined Landsat and Sentinel-2 satellite data.`
  },

  {
    id: 6,
    description: `Reaching the Precipice in Angola - The Huíla Plateau rises sharply above Angola’s coastal plains, forming part of southern Africa’s Great Escarpment.

This dramatic topography formed after Gondwana broke apart, and erosion has pushed the escarpment inland over millions of years.`
  },

  {
    id: 7,
    description: `An Amphitheater of Rock at Cedar Breaks - Cedar Breaks in Utah exposes millions of years of sedimentary rock formed in an ancient lake basin.

Erosion, uplift, and volcanic activity shaped the landscape, while harsh conditions allow ancient bristlecone pines to survive.`
  },

  {
    id: 8,
    description: `Lake Eyre Blushes - In 2025, rare flooding filled Lake Eyre in Australia, which later turned pink and red as it evaporated.

Salt-loving microorganisms thrived in the increasingly saline water, producing pigmented compounds visible from space.`
  },

  {
    id: 9,
    description: `The Galaxy Next Door - Astronauts aboard the ISS captured the Large Magellanic Cloud, a nearby dwarf galaxy 160,000 light-years away.

It is visible from the Southern Hemisphere and is a hotbed of star formation and supernova research.`
  }

{
  id: 10,
  description: `A Siberian Snowman in Billings - Icons of winter are sometimes found in unexpected places. In one striking example, a series of oval lagoons in a remote part of Siberia forms the shape of a towering snowman when viewed from above. This image, centered on the remote village of Billings and nearby Cape Billings on Russia's Chukchi Peninsula, was captured by the OLI (Operational Land Imager) aboard Landsat 8 on June 16, 2025. Established in the 1930s as a port and supply point for the Soviet Union, the village sits on a narrow sandspit that separates the Arctic Ocean from a series of connected coastal inshore lagoons. The elongated, oval lagoons are frozen over and flanked by sea ice. Though June is one of the warmest months in Billings, ice cover is routine even then. Mean daily minimum temperatures are just minus 0.6 degrees Celsius (30.9 degrees Fahrenheit) in June, according to meteorological data.

Though the shape may seem engineered, it is natural and the product of geological processes common in the far north. The ground in this part of Siberia is frozen most of the year and pockmarked with spear-shaped ice wedges buried under the surface. Summer melting causes overlying soil to slump, leaving shallow depressions that fill with meltwater and form thermokarst lakes. Once created, consistency in the direction of the winds and waves likely aligned and elongated the lakes into the shapes seen in the image. The thin ridges separating the lakes may represent the edges of different ice wedges below the surface.

The first reference to humans building snowmen dates back to the Middle Ages, according to the book The History of the Snowman. While three spherical segments are the most common form, other variants dominate in certain areas. In Japan, snowmen typically have just two segments and are rarely given arms. This five-segmented snowman-shaped series of lakes spans about 22 kilometers (14 miles) from top to bottom, making it roughly 600 times longer than the actual snowwoman that held the Guinness record for being the world's tallest snowperson in 2025.

Snowmen are not the only winter icons tied to this remote landscape. For early expeditions to the Russian Arctic, reindeer offered one of the most reliable modes of transportation. That includes expeditions by the town’s namesake, Commodore Joseph Billings, a British-born naval officer who enlisted in the Russian navy and led a surveying expedition to find a Northeast Passage between 1790 and 1794. Although the hundred-plus members of the expedition did not reach Cape Billings, they explored much of the Chukchi Peninsula, producing some of the first accurate maps and further confirming that Asia and North America were separated by a strait. In the winter months, when their ships were beset with ice, the explorers moved to temporary camps on land and instead surveyed the region with reindeer-drawn wooden sleds, according to historical accounts.

Indigenous Chukchi people living on the peninsula at the time routinely used reindeer to haul both people and cargo. A pair of reindeer can comfortably haul hundreds of pounds for several hours a day. In addition to their impressive endurance in cold temperatures, reindeer largely feed themselves by digging through snow and grazing on lichens, something that neither sled dogs nor horses can do. Historical documents indicate that the Billings expedition enlisted Chukchi people to manage and care for the reindeer they used, with some accounts suggesting that the explorers used dozens of reindeer at times. While reindeer were mainly used to haul sleds, Chukchi people likely rode them as well. Non-Chukchi members of the expedition reportedly experimented with riding reindeer, though their experiments did not always go smoothly. Billings' secretary and translator Martin Sauer reported using a saddle without stirrups or a bridle and falling 'nearly 20 times' after about three hours of travel in his account of the expedition. Not only that, he added, but the saddle 'at first, causes astonishing pain to the thighs.'`
},

{
  id: 11,
  description: `A Subtle Return of La Niña - After a several-month hiatus, La Niña returned to the equatorial Pacific Ocean in September 2025 and has continued into December. However, this occurrence of El Niño’s cooler counterpart is relatively weak, and its influence on weather and climate over the next several months remains to be seen. Part of the El Niño-Southern Oscillation (ENSO) cycle, La Niña develops when strengthened easterly trade winds intensify the upwelling of cold, deep water in the eastern tropical Pacific. This process cools large swaths of the eastern and central equatorial Pacific while simultaneously pushing warm surface waters westward toward Asia and Australia. In a report published on December 11, the NOAA Climate Prediction Center confirmed that below-average sea surface temperatures associated with La Niña conditions were present and likely to continue for another month or two.

The shifting wind patterns and the movement of heat within the ocean have a direct impact on sea level. Because cooler water is denser and occupies less volume than warm water, sea levels in the central and eastern Pacific drop during La Niña events. The map above shows sea surface height observed on December 1, 2025. Shades of blue indicate below-normal sea levels, shades of red show above-normal levels, and white represents near-normal conditions. Data for the map were acquired by the Sentinel-6 Michael Freilich satellite and processed by scientists at NASA’s Jet Propulsion Laboratory (JPL). Signals related to seasonal cycles and long-term trends have been removed to highlight sea level changes associated with ENSO and other short-term natural phenomena. The satellite’s twin successor, Sentinel-6B, launched in November 2025 and is expected to begin contributing to ENSO research and forecasts sometime in 2026.

This equatorial surface-water cooling alters the exchange of heat and moisture between the ocean and atmosphere, reshaping global atmospheric circulation patterns. La Niña’s coupling with the ocean and atmosphere can shift mid-latitude jet streams, intensifying rainfall in some regions while bringing drought to others. Typically, La Niña years bring below-average rainfall to the American Southwest and above-average rainfall to the Northwest. But when the event is weak—whether El Niño or La Niña—the associated weather patterns can be 'notoriously difficult to predict,' said Josh Willis, an oceanographer and Sentinel-6 Michael Freilich project scientist at JPL in Southern California. 'It still has the potential to tilt our winter toward the dry side in the American Southwest, but it's never a guarantee, especially with a mild event like this one.'`
},

{
  id: 12,
  description: `New Timing for Stubble Burning in India - Every year for decades, long rivers of smoke and haze have spread across the Indo-Gangetic Plain in northern India from October to December. That's when farmers in Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, and other states burn off plant 'stubble' after the rice harvest. When winds are weak and the atmosphere becomes stagnant, the haze can push levels of air pollution several times higher than limits recommended by the World Health Organization. Smoke typically mixes with particles and gases from other sources, such as industry, vehicles, domestic fires (heating and cooking), fireworks, and dust storms, to form the haze, though scientists consider stubble burning to be a major factor.

In some ways, the seasonal timing of stubble fires in 2025 followed typical patterns. Air quality deteriorated in Delhi and several other cities for about a month after crop fires intensified during the last week of October, explained Hiren Jethva, a Morgan State University atmospheric scientist based at NASA’s Goddard Space Flight Center. For about a decade, Jethva has tracked the stubble burning season in India using satellites, and has made predictions about the intensity of the upcoming fire season based on vegetation observations.

The MODIS (Moderate Resolution Imaging Spectroradiometer) on NASA's Aqua satellite captured this image of a smoky haze darkening skies over much of the plain on November 11, 2025. According to news reports, it was the first of several days in 2025 when pollution levels exceeded 400 on India's air quality index, the strongest rating on the scale. As in past years, the poor air quality prompted officials in some areas to close schools and institute more stringent air quality controls on construction.

However, the daily timing of burning departs from what Jethva has seen in the past. He started tracking the number of fires years ago by primarily tallying observations from MODIS—which pass over locations on Earth each morning and afternoon on the Terra and Aqua satellites, respectively. Then, most fires were lit in the early afternoon between 1 p.m. and 2 p.m. local time.

But in the past few years, stubble fires have occurred progressively later in the day, Jethva said. He identified the shift by analyzing observations from GEO-KOMPSAT-2A, a South Korean geostationary satellite launched in late 2018 that collects data every 10 minutes. Most stubble fires now happen between 4 p.m. and 6 p.m., meaning that fire-monitoring systems that rely solely on MODIS, or similar sensors like VIIRS (Visible Infrared Imaging Radiometer Suite), miss many of the fires. 'Farmers have changed their behavior,' he said.

His analysis of GEO-KOMPSAT-2A observations indicates that the stubble burning activity in Punjab and Haryana was moderate in 2025 compared to other recent years. This year had higher numbers of fires compared to 2024, 2020, and 2019 but fewer fires than 2023, 2022, and 2021, he found. Indian Space Research Organization researchers have also pointed out the shift in the timing of stubble burning. In a Current Science study published in 2025, one group reported that MSG (Meteosat Second Generation) satellite observations showed a shift in peak fire activity from about 1:30 p.m. in 2020 to about 5:00 p.m. in 2024. In December 2025, researchers with the International Forum for Environment, Sustainability, & Technology (iForest) released a multi-satellite analysis that came to a similar conclusion.

Meanwhile, parsing out precisely how much stubble fires contribute to poor air quality in Delhi compared to other sources of pollution remains a topic of active study and debate among scientists. 'Studies report contributions ranging from 10 to 50 percent,' said Pawan Gupta, a NASA research scientist who specializes in air quality. Gupta estimates that the stubble burning contribution ranges from 40 to 70 percent on a given day, dropping to 20 to 30 percent if averaged over a month or burning season, and under 10 percent if averaged annually. 'Meteorological conditions—like a shallow boundary layer height and low temperature—during the burning season add extra complexity,' he said.

The timing of the fires may influence the degree to which stubble burning affects air quality. Some modeling research suggests that evening fires may lead to a stronger overnight buildup of particle pollution than early-afternoon fires because the planetary boundary layer, the lowest part of the atmosphere, tends to be shallower and have weaker winds at night, allowing pollutants to accumulate.`
}

{
  id: 13,
  description: `Pacific Moisture Drenches the U.S. Northwest - Waves of heavy rainfall in early December 2025 spurred landslides and flooding in parts of the Pacific Northwest. The deluge was the result of a potent atmospheric river that took aim at the region starting around December 7. Atmospheric rivers are long, narrow bands of moisture that move like rivers in the sky, transporting water vapor from the tropics toward the poles. They occur around the planet, most often in autumn and winter, with the U.S. West Coast typically affected by moist air that originates near Hawaii. In this event, however, some of the moisture arrived from even farther away, originating roughly 7,000 miles (11,000 kilometers) across the Pacific from near the Philippines.

This map shows the total precipitable water vapor in the atmosphere at 11:30 p.m. Pacific Time on December 10. It is derived from NASA’s GEOS (Goddard Earth Observing System) and uses satellite data and models of physical processes to approximate what is happening in the atmosphere. Precipitable water vapor represents the amount of water contained in a column of air, assuming all the water vapor condensed into liquid. The map’s green areas indicate the highest amounts of moisture. Note that not all precipitable water vapor falls as rain; at least some remains in the atmosphere. Nor is it a cap on how much rain can fall, since rainfall can increase as more moisture flows into a column of air. Still, it serves as a useful indicator of areas where excessive rainfall is likely.

According to the National Weather Service, preliminary ground-based measurements showed that several locations in western Washington received more than 10 inches (250 millimeters) of rain over a 72-hour period ending on the morning of December 11. Seattle-Tacoma International Airport set a daily rainfall record on December 10, with 1.6 inches (40 millimeters). River flooding was ongoing on December 11, with the Skagit River and Snohomish River seeing record or near-record flood levels that day. Floodwater and mudslides have closed numerous roadways, including the eastbound lanes of I-90 out of western Washington.

NASA’s Disasters Response Coordination System has been activated to support the ongoing response efforts by the Washington State Emergency Operations Center. The team will be posting maps and data products on its open-access mapping portal as new information becomes available.`
},

{
  id: 14,
  description: `An Unrelenting Tule Fog - An atmospheric phenomenon occurring over much of California was unmistakable in satellite imagery in late autumn 2025. Fog stretching some 400 miles (640 kilometers) across the state’s Central Valley appeared day after day for more than two weeks in late November and early December. Known as tule (TOO-lee) fog, named after a sedge that grows in the area’s marshes, these low clouds tend to form in the valley in colder months when winds are light and soils are moist. This animation shows a sprawling blanket of white fog filling most or all of the valley from Redding to Bakersfield between November 24 and December 9, 2025. While the fog mostly remained hemmed in by the Coastal Range and the Sierra Nevada, it sometimes spilled through the Carquinez Strait toward San Francisco Bay. These images were acquired with the MODIS (Moderate Resolution Imaging Spectroradiometer) instrument on NASA’s Terra satellite and the VIIRS (Visible Infrared Imaging Radiometer Suite) on the NOAA-20 and Suomi NPP satellites.

The Central Valley is fertile ground for the formation of tule fog, a persistent radiation fog, in late autumn and winter. It occurs when air near the surface, laden with moisture from evaporation, cools and the water saturates the air. If winds are calm, water droplets accumulate into fog clouds near the ground. Plenty of water was present in the valley’s soils following a very wet autumn. Across nearly all of central and southern California, precipitation totals from September through November 2025 were among the top 10 percent on record, California Institute for Water Resources climate scientist Daniel Swain noted on his Weather West blog. In late November, a very stable high-pressure system developed over the state, which acted like a lid that trapped moist air and confined the fog layer to the valley. With no major storms moving through to disrupt the stratification, the tule fog endured.

Temperatures have been notably cooler in the valley under the fog layer, in sharp contrast to the rest of the state, which was mostly warmer than normal. Despite the contrast, however, the ambient air mass has been warmer overall, Swain wrote. This may be due in part to warm ocean water offshore and a low Sierra Nevada snowpack sending less cold air downslope, he added. The warmer overall temperatures could explain why fog has lingered at a slightly higher level—more like stratus clouds—at certain times and locations, said Swain. Colder temperatures would be necessary to produce the densest fog near the surface. The somewhat higher cloud in 2025 has differed from past events, when low visibility at ground level has caused major traffic incidents.

Central California has seen long stretches of cold, socked-in days in the past. In 1985, for example, Fresno experienced 16 consecutive days of dense fog, and Sacramento endured 17, according to news reports. Researchers have found, however, that tule fog has been forming less often in California in recent decades. Foggy days are beneficial for the valley’s fruit and nut trees, which need sufficient rest between growing seasons to be most productive. The fog typically comes with chilly weather that brings on a dormant period; it also shields trees from direct sunlight that would otherwise warm the plant buds.`
},

{
  id: 15,
  description: `A Hot and Fiery Decade for Kīlauea - Of the hundreds of active volcanoes that NASA satellites have observed since the early 2000s, Kīlauea stands out. It's one of the world's leading emitters of thermal infrared energy, according to observations from the Aqua and Terra satellites. (Other top emitters include Bárðarbunga in Iceland and the Democratic Republic of the Congo's Nyiragongo.) This chart shows the volcano's daily average spectral radiance from 2016 to 2025, underscoring its frequent activity and variability. The chart draws on data from MODVOLC, an automated volcano monitoring system developed by scientists at the University of Hawai'i. The system processes observations of all the world's volcanoes from MODIS (Moderate Resolution Imaging Spectroradiometer) sensors and detects thermal anomalies, or "hot spots," on a daily basis.

From 2016 to 2018, Kīlauea showed low but continuous activity due to relatively gentle, long-lived eruptions at two separate vents. At Halema‘uma‘u, the summit crater, a previously unstable lava lake had stabilized and grown to cover about 42,000 square meters (452,000 square feet). This made it the world's second-largest lava lake, surpassed only by Nyiragongo's. At the same time, lava poured from Puʻu ʻŌʻō, a cone farther down the mountain in the East Rift. Lava spilling from Puʻu ʻŌʻō sometimes formed breakout flows that drained all the way to the coastline and built a delta at Kamokuna as lava entered the sea.

On April 30, 2018, Puʻu ʻŌʻō's crater floor collapsed, ending Kīlauea's longest and most voluminous known outpouring of lava in 500 years. Magma moved into the Lower East Rift Zone, and days later lava flows destroyed neighborhoods in Leilani Estates. By the end of the three-month eruption, more than 320,000 Olympic-sized pools of lava had destroyed 700 homes and caused up to $1 billion in losses. The eruption pushed Kīlauea's spectral radiance to more than ten times the 2016 baseline.

After several quiet years, activity resumed in December 2024 with frequent lava fountains in Halema‘uma‘u. One episode in November 2025 produced fountains up to 1,000 feet (300 meters) high, while volcanic gases formed swirling "volnados." On December 6, 2025, another eruption destroyed a U.S. Geological Survey camera site. Scientists attribute the surge to volatile-rich magma rising rapidly to the surface. According to MODVOLC data, these events often push Kīlauea's spectral radiance to double or triple pre-2018 levels.

While Kīlauea has been dominated by gentle eruptions over the past two centuries, its geologic record shows cycles of more explosive activity. Long-term monitoring systems like MODVOLC and MIROVA, now transitioning to newer VIIRS sensors, are critical for understanding and predicting volcanic behavior on a global scale.`
}

{
  id: 16,
  description: `Islands of Fire and Ice Veiled in Cloud - On February 2, 1775, during Captain James Cook’s second Pacific voyage, the explorer laid eyes on two rugged volcanic islands in the South Atlantic Ocean. He named the larger one after the Christian holiday Candlemas, the day of its discovery. The smaller one later gained the moniker Vindication, after a 1930 expedition vindicated Cook’s original, though doubted, report that two closely spaced islands existed there.

The specks of land are part of the South Sandwich Islands—a chain so far-flung that one would have to sail more than 1,600 kilometers (1,000 miles) to reach them from South America or Antarctica. The area is as cloudy as it is remote. This image, acquired with the OLI-2 (Operational Land Imager-2) on Landsat 9 on November 18, 2022, is one of the clearest captured by any Landsat satellite in the past decade. Neighboring Candlemas and Vindication islands appear amid icy waters, their volcanic foundations heavily eroded by snow, ice, and the fitful South Atlantic.

The oddly shaped Candlemas Island initially formed as two separate islands, estimated to have merged several hundred years ago. The larger, southeastern portion is much older and consists of an eroded stratovolcano draped in glacial ice. The northwestern part of the island contains lava flows radiating from cinder cones such as Lucifer Hill. Reports from 1823 and 1911 described dark brown clouds and white steam erupting from this volcanic dome, while sporadic reports throughout the 20th century noted other volcanic activity. Vindication Island was also built through volcanism, although there are no reports of recent activity there. Instead, erosion appears to be the dominant force shaping the island in modern times. Geologists note it has been “greatly reduced” by the marine environment and is bounded by high cliffs.

The South Sandwich Islands are a string of eleven small volcanic peaks, formed where the South American Plate is subducting beneath the tiny South Sandwich Plate. Although atmospheric activity often hinders clear views of these islands, weather patterns in the area can produce their own spectacles visible to satellites. When conditions are just right, the peaks jutting out of the ocean can disturb passing winds to produce striking bands of wave clouds.`
},

{
  id: 17,
  description: `Senyar Swamps Sumatra - Tropical cyclones almost never form over the Strait of Malacca. The narrow waterway separating Peninsular Malaysia from the Indonesian island of Sumatra sits so close to the equator that the Coriolis effect is usually too weak to allow storms to rotate enough to organize into cyclones. But on November 25, 2025, meteorologists watched as a tropical depression intensified into Cyclone Senyar—just the second documented case of a tropical cyclone forming in the strait.

Hemmed in by land on both sides, Senyar made landfall in Sumatra later that day as it made a U-turn and headed east toward Malaysia. As the slow-moving storm passed over Sumatra’s mountainous terrain, it dropped nearly 400 millimeters (16 inches) of rain in many areas, according to satellite-based estimates from NASA’s Global Precipitation Measurement (GPM) mission. The torrent caused extensive flash floods and landslides in Sumatra’s rugged terrain. Streams and rivers rapidly overflowed with sediment-laden, debris-filled waters that swept through villages, cities, and towns.

News reports suggest that the damage was worsened by an earthquake that struck on November 27 and the abundance of loose piles of timber that became destructive battering rams in high water. As of December 4, Indonesian authorities reported several hundred deaths and more than 700,000 displaced people.

The OLI-2 (Operational Land Imager-2) on Landsat 9 captured this image of flooding in Aceh and North Sumatra provinces on November 30, 2025. Muddy sediment-filled water appears to have swamped much of Lhoksukon, a town of 40,000 people, and several surrounding villages. Other tropical cyclones and monsoon rains affecting Sri Lanka, Thailand, Malaysia, and Vietnam around the same time caused widespread destruction across the region. According to the United Nations Office for the Coordination of Humanitarian Affairs, flooding affected more than 10.8 million people and displaced over 1.2 million.`
},

{
  id: 18,
  description: `Hayli Gubbi’s Explosive First Impression - On November 23, 2025, the Hayli Gubbi volcano in northern Ethiopia erupted in dramatic fashion, marking its first documented explosive eruption. The plume reached the upper troposphere and drifted northeast, eventually disrupting flights over northern India and China.

The MODIS instrument on NASA’s Aqua satellite captured the eruption roughly four hours after it began. Satellite data indicated the plume reached 15 kilometers (9 miles) above sea level and contained approximately 0.2 teragrams (220,000 tons) of sulfur dioxide. A lighter-colored cloud of likely pyroclastic material spread northward near the ground.

Hayli Gubbi lies in the tectonically active Afar Depression, where plates are pulling apart and magma rises easily to the surface. Although geologic evidence suggests the volcano erupted within the past 8,000 years, its remoteness leaves the exact timing uncertain. The volcano sits about 12 kilometers south-southeast of Erta Ale, Ethiopia’s most active volcano. After Erta Ale’s July 2025 eruption, scientists tracked magma migrating southward beneath Hayli Gubbi using InSAR and other techniques.

Low-level activity at Hayli Gubbi began months before the eruption, including sulfur dioxide emissions, persistent summit clouds, and ground uplift of several centimeters. The eruption subsided by November 25 but left lasting impacts. Ash blanketed nearby villages, contaminated water and grazing land, and caused respiratory problems. Landsat 9 imagery from November 24 shows that the eruption enlarged Hayli Gubbi’s crater and created two new craters, with ash covering older lava flows on the volcano’s slopes.`
},

{
  id: 19,
  description: `Satellites Detect Seasonal Pulses in Earth’s Glaciers - Malaspina Glacier in southeastern Alaska is the world’s largest piedmont glacier, spreading outward from the Saint Elias Mountains like pancake batter. Though it appears static, the glacier speeds up in spring and slows in winter. A new NASA analysis shows that glaciers worldwide exhibit diverse seasonal flow patterns that offer insight into their vulnerability to climate change.

By analyzing millions of satellite images collected between 2014 and 2022, NASA scientists Chad Greene and Alex Gardner mapped seasonal glacier movement globally. They tracked crevasses and surface debris—unique glacial fingerprints—using algorithms developed for the ITS_LIVE project. Their findings, published in Science in November 2025, reveal how glaciers respond differently to seasonal warming.

Seasonal accelerations were strongest at high northern latitudes. Alaskan glaciers typically sped up in spring, while those in Arctic Europe and Russia peaked later in summer or early fall. Meltwater reaching the glacier base reduces friction and acts like a lubricant, temporarily increasing flow speed. As meltwater channels enlarge later in the season, pressure drops and glaciers slow again.

Other glaciers behave differently. Barnes Ice Cap in the Canadian Arctic shows sudden summer acceleration, while Pakistan’s Baltoro Glacier experiences a gradual downstream propagation of speedup. The researchers found that glacier flow accelerates with every degree of warming and that seasonal speedups are linked to long-term glacier change. “We wanted to check the health of Earth’s glaciers, so we measured their pulse,” Greene said.`
}


];

/* ================================
   DOM ELEMENTS
================================ */

const imageElement = document.getElementById("quiz-image");
const descriptionElement = document.getElementById("description");
const revealBtn = document.getElementById("reveal-btn");
const nextBtn = document.getElementById("next-btn");

/* ================================
   STATE
================================ */

let currentIndex = -1;

/* ================================
   FUNCTIONS
================================ */

function getRandomIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * quizzes.length);
  } while (index === currentIndex);
  return index;
}

function loadQuiz() {
  descriptionElement.classList.add("hidden");

  currentIndex = getRandomIndex();
  const quiz = quizzes[currentIndex];

  const variant = Math.random() < 0.5 ? "" : "a";
  const imgPath = `images/pic${quiz.id}${variant}.jpg`;

  imageElement.src = imgPath;

  imageElement.onerror = () => {
    imageElement.src = `images/pic${quiz.id}.jpg`;
  };

  descriptionElement.textContent = quiz.description;
}

/* ================================
   EVENT LISTENERS
================================ */

revealBtn.addEventListener("click", () => {
  descriptionElement.classList.remove("hidden");
});

nextBtn.addEventListener("click", loadQuiz);

/* ================================
   INIT
================================ */

loadQuiz();







