// Local Storage
// add a counter to the form submission review.html page. Every time that page is loaded successfully upon form submission, add one to the counter.
const displayRecsCount = document.querySelector(".recs");

// assign variable to the number of review submissions
// assign the variable 0 if the numVisits KEY is missing
let numRecs = Number(window.localStorage.getItem("numRecs-ls")) || 0;

// determine what message to display to the user
// based off their number of reviews successfully submitted
if (numRecs !== 0) { // if they have submitted a review before...
    displayRecsCount.textContent = numRecs; // show them how many reviews they've submitted
}
else {
    displayRecsCount.textContent = `Thank you for submitting your first recommendation!`;
}

// increment the number of reviews by 1
numRecs++;

// story new review total into localStorage, key=numReviews-ls
localStorage.setItem("numRecs-ls", numRecs);