const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// hamburger button nav
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// temple data array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide, Australia",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg"
    },
    {
        templeName: "Toronto Ontario",
        location: "Brampton, Ontario",
        dedicated: "1990, August, 25",
        area: 57982,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-854102-wallpaper.jpg"
    },

];

// loop through the temples array to create 
// "temple cards" for each temple
// Each temple card should display:
// Name, location, dedication date, total area of the
// temple in sq ft, absolute image address of the temple,
// an alt value for the temple image.
// Use native lazy loading to each temple image


const templeCards = document.querySelector(".temple-cards"); // find the location in the html doc
function createTempleCard(temples) {
    templeCards.innerHTML = ""; // clear any existing content
    temples.forEach(function (temple) { // for each temple in temples
        const card = document.createElement("figure"); // create a figure and call it 'card'
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>LOCATION: ${temple.location}</p>
            <p>DEDICATED: ${temple.dedicated}</p>
            <p>SIZE: ${temple.area} sq ft </p>
            <img src="${temple.imageUrl}" alt="Front view of the ${temple.templeName} temple of The Church of Jesus Christ of Latter-day Saints." loading="lazy">
        `;
        templeCards.appendChild(card);
    })
}
createTempleCard(temples); // call the function and actually create the temple cards


// Add dedicatedYear property to each temple in the array (useful later)
temples.forEach(temple => {
    let yearString = temple.dedicated.split(",")[0]; // isolates the year
    temple.dedicatedYear = parseInt(yearString); // parse from string to int, add a new key-value in array called dedicatedYear
})

// add variable to access the heading of each page to change it based on filter
const templeHeading = document.querySelector("#temples h2"); // targets the h2 specifically

// when user clicks "Home" on nav menu
// shows all temples
const homeNavLink = document.querySelector("#homelink");
homeNavLink.addEventListener("click", () => {
    createTempleCard(temples); // show all temples
    templeHeading.innerText = "All Listed Temples";
})
// when user clicks "Old" on nav menu
// temples built before 1990
const oldNavLink = document.querySelector("#oldlink"); // assigns a variable here for the "old" link in the html doc
oldNavLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => temple.dedicatedYear < 1990); // if dedication year is less than (before) 1990
    createTempleCard(oldTemples); // reuse the function created before
    templeHeading.innerText = "Old Temples";
})

// when user clicks "New" on nav menu
// temples built after 2000
const newNavLink = document.querySelector("#newlink"); // assigns variable for new
newNavLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => temple.dedicatedYear > 2000); // if dedicated after 2000
    createTempleCard(newTemples);
    templeHeading.innerText = "New Temples";
})

// when user clicks "Large" on nav menu
// temples larger than 90000 square feet
const largeNavLink = document.querySelector("#largelink");
largeNavLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
    templeHeading.innerText = "Large Temples";
})

// when user clicks "Small" on nav menu
// temples smaller than 10000 square feet
const smallNavLink = document.querySelector("#smalllink");
smallNavLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
    templeHeading.innerText = "Small Temples";
})