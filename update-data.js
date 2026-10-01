const fs = require('fs');
let data = fs.readFileSync('src/lib/data.ts', 'utf8');

// 1. Update building-setting-out to construction-setting-out
data = data.split('"building-setting-out"').join('"construction-setting-out"');
data = data.split('title: "Building Setting Out",').join('title: "Construction Setting Out",');
data = data.split('shortTitle: "Building Setting Out",').join('shortTitle: "Construction Setting Out",');
data = data.split('metaTitle: "Building Setting Out & Construction Grid Layout Services",').join('metaTitle: "Construction Setting Out Services in Kerala",');
data = data.split('h1: "Building Setting Out Survey Services",').join('h1: "Construction Setting Out Services in Kerala",');

// 2. Update subdivision-survey
data = data.split('metaTitle: "Land Subdivision & Plot Partition Survey | Odyssey Surveyors",').join('metaTitle: "Land Subdivision Survey in Kerala | Odyssey Survey",');
data = data.split('h1: "Land Plot Subdivision & Layout Partitioning Survey Services",').join('h1: "Land Subdivision Survey in Kerala",');

// 3. Update dgps-vs-rtk
data = data.split('slug: "dgps-rtk-vs-total-station-accuracy-comparison",').join('slug: "dgps-vs-rtk",');
data = data.split('title: "DGPS & RTK vs Traditional Total Station: Accuracy & Speed Comparison",').join('title: "DGPS vs RTK: What\'s the Difference?",');
data = data.split('metaTitle: "DGPS / RTK vs Total Station: Accuracy, Speed & Cost Compared",').join('metaTitle: "DGPS vs RTK: What\'s the Difference? | Odyssey Survey",');

// 4. Update Pathanamthitta
data = data.split('metaTitle: "Land Survey in Pathanamthitta & Thiruvalla | Certified Surveyors",').join('metaTitle: "Land Surveyor in Pathanamthitta & Thiruvalla | Odyssey Survey",');

// 5. Add a few internal links for SEO
// "Pathanamthitta" -> "<Link>" won't work in data.ts natively unless rendered safely.
// We can just add HTML tags for internal links and modify the components to render them.
data = data.split('Pathanamthitta headquarters').join('<a href="/areas/pathanamthitta-thiruvalla" class="text-emerald-600 hover:underline">Pathanamthitta headquarters</a>');
data = data.split('subdivision-survey"').join('subdivision-survey"');

fs.writeFileSync('src/lib/data.ts', data);
console.log('Done');
