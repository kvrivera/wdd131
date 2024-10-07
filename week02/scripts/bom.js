const input = document.querySelector('#favchap'); // use the id in the HTML doc, like so
const button = document.querySelector('button'); // call this button, as it doesn't have an id, it's just a button
const list = document.querySelector('#list'); // this <ul> has an id of list, so we use a hashtag

// Create a li element that will hold each entries chapter title and an associated delete button.
const listElement = document.createElement('li');
const deleteButton = document.createElement('button');
list.textContent = input.ariaValueMax; // assignment says to make this input.value but it won't allow me to 

deleteButton.textContent = '❌'; // this is what the delete button will say
li.append(deleteButton); // append the li element with the delete button
list.append(li); // append li element variable to the unordered list in the HTML