const input = document.querySelector('#favchap'); // use the id in the HTML doc, like so
const addChapterButton = document.querySelector('button'); // call this button, as it doesn't have an id, it's just a button
console.log(document.body.innerHTML);
const list = document.querySelector('#list'); // this <ul> has an id of list, so we use a hashtag

// Create a li element that will hold each entries chapter title and an associated delete button.


// create a click eventListener for Add Chapter button
addChapterButton.addEventListener('click', function () {
    // code to execute when the "Add Chapter" button is clicked

    if (input.value.trim() !== '') { // as long as user input is not '' (a blank string)
        const listElement = document.createElement('li'); // create a list element
        list.append(listElement); // append li element variable to the unordered list in the HTML
        listElement.textContent = input.value; // add the user's input as text value
        input.value = ''; // reset the value to '' empty string so user doesn't have to backspace to type the next thing
        const deleteButton = document.createElement('button'); // create a delete button
        listElement.append(deleteButton); // add the delete button to the list element
        deleteButton.textContent = '❌'; // this is what the delete button will say
        deleteButton.addEventListener('click', function () { // if user clicks the delete button
            list.removeChild(listElement); // the list element will be removed
            input.focus(); // the focus is the active cursor
            input.value = ''; // input value changed to ''
        })
    } else { // if it is a blank string
        input.focus();
        input.placeholder = 'Enter your favourite chapter here...';
    }
});
