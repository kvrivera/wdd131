/*
This practice work is coming from this wepbage
https://byui-cse.github.io/wdd131-ww-course/resources/javascript-looping.html
*/

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through
// the studentReport array and print to the 
// console the current array value if it is
// below 30

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) { // as long as the index is smaller than the value of LIMIT, which we have assigned a value of 30
        console.log(studentReport[i])
    };
}

// while loop
let i = 0;
while (i < studentReport.length) { // as long as the index is within the number of items in the array
    if (studentReport.length[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++; // add +1 to the value of [i] and run it again
}

// forEach loop
studentReport.forEach(function item() {
    if (item < LIMIT) {
        console.log(item);
    }
});

// for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

/* Use any type of repetition (looping) statement 
to dynamically produce the day names (Monday, Tuesday, 
Wednesday, etc.) of the next number of DAYS from 
today's date. */

const n = 6; // number of days forward
// get output location on document to append within list
const output = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
const options = { weekday: 'long'}; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}. `;

// next n days
for (let i = 1; i <= n; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
	item = document.createElement("li"); // list item
	item.textContent = nextdaystring;
	output[0].appendChild(item);
}

