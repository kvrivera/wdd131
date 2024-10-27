// Local Storage
// add a counter to the form submission review.html page. Every time that page is loaded successfully upon form submission, add one to the counter.
const displayReviewCount = document.querySelector(".reviews");

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