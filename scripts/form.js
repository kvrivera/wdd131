const productNameSelector = document.querySelector("#productname");

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function populateNameSelectorField() {
    products.forEach(function (product) {
        productNameSelector.innerHTML += `
        <option value="${product.id}">${product.name}</option>
    `;
    })
}

populateNameSelectorField();

// Local Storage
// add a counter to the form submission review.html page. Every time that page is loaded successfully upon form submission, add one to the counter.
const displayReviewCount = document.querySelector(".visits");

// assign variable to the number of review submissions
// assign the variable 0 if the numVisits KEY is missing
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

// determine what message to display to the user
// based off their number of reviews successfully submitted
if (numReviews !== 0) { // if they have submitted a review before...
    displayReviewCount.textContent = numReviews; // show them how many reviews they've submitted
}
else {
    displayReviewCount.textContent = `Congratulations on submitting your first review!`;
}

// increment the number of reviews by 1
numReviews++;

// story new review total into localStorage, key=numReviews-ls
localStorage.setItem("numReviews-ls", numReviews);