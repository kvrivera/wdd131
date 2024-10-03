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
    if (studentReport[i] < LIMIT) { // as long as the index is smaller than the total number in the array
        console.log(studentReport[i])
    };
}