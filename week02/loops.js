// loops.js
myInfo = {
    name: "Kathleen",
    photo: "images/dog.jpeg",
    favoriteFoods: ["Sushi", "Butter Chicken", "Cheesey Bagels", "Chocolate Ice Cream", "Smoothies"],
    hobbies: ["Reading", "Camping", "Hiking"],
    placesLived: [
        {
            place: "Barbieworld, Fun Town",
            length: "5 years",
        },
        {
            place: "Narnia, Spare 'Oom",
            length: "3 years",
        },
        {
            place: "Faerieland, Neopia",
            length: "1 year",
        },
    ],
};
// Use a loop to iterate through all of the elements in the array
Array.forEach(e in favoriteFoods); {
    let e = document.createElement("li");
    e.textContent = myInfo.favoriteFoods[index];
}

Array.map(e in favoriteFoods); {

}
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);