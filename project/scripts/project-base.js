// more than one function
// Include DOM interaction: select an element, modify it, and listen for and react to events.
// Use conditional branching.
// Use objects, arrays, and array methods.
// Exclusively use template literals when building strings.
// Use localStorage.

// storybook array
// themes: resilience, emotional regulation, death, goodbye, be yourself
const storybooks = [
    {
        bookTitle: "When I Feel Sad",
        author: "Paula Bowles",
        illustrator: "",
        themes: "resilience, emotional regulation",
        myRating: 5,
        imgLocation: "images/when-i-feel-sad.jpg",
        imgAltText: "Cover of When I Feel Sad by Paula Bowles"
    },
    {
        bookTitle: "I Wish I Could Tell You",
        author: "Jean-François Sénéchal",
        illustrator: "",
        themes: "death",
        myRating: 5,
        imgLocation: "images/i-wish-i-could-tell-you.jpg",
        imgAltText: "Cover of I Wish I Could Tell You by Jean-François Sénéchal"
    },
    {
        bookTitle: "In a Jar",
        author: "Deborah Marcero",
        illustrator: "",
        themes: "goodbye",
        myRating: 5,
        imgLocation: "images/in-a-jar.jpg",
        imgAltText: "Cover of In a Jar by Deborah Marcero"
    },
    {
        bookTitle: "Little Wolf's First Howling",
        author: "Laura McGee Kvasnosky",
        illustrator: "",
        themes: "be yourself",
        myRating: 5,
        imgLocation: "images/little-wolfs-first-howling.jpg",
        imgAltText: "Cover of Little Wolf's First Howling by Laura McGee Kvasnosky"
    },
    {
        bookTitle: "The Rescuer of Tiny Creatures",
        author: "Curtis Manley",
        illustrator: "",
        themes: "be yourself",
        myRating: 5,
        imgLocation: "images/the-rescuer-of-tiny-creatures.jpg",
        imgAltText: "Cover of The Rescuer of Tiny Creatures by Curtis Manley"
    },
    {
        bookTitle: "Not Quite Narwhal",
        author: "Jessie Sima",
        illustrator: "",
        themes: "be yourself",
        myRating: 5,
        imgLocation: "images/not-quite-narwhal.jpg",
        imgAltText: "Cover of Not Quite Narwhal by Jessie Sima"
    },
    {
        bookTitle: "It's Okay To Be a Unicorn",
        author: "Jason Tharp",
        illustrator: "",
        themes: "be yourself",
        myRating: 5,
        imgLocation: "images/its-okay-to-be-a-unicorn.jpg",
        imgAltText: "Cover of It's Okay to be a Unicorn by Jason Tharp"
    },
    {
        bookTitle: "Sensitive",
        author: "Sara Levine",
        illustrator: "",
        themes: "emotional regulation",
        myRating: 5,
        imgLocation: "images/sensitive.jpg",
        imgAltText: "Cover of Sensitive by Sara Levine"
    },
    {
        bookTitle: "Daisy",
        author: "Jessixa Bagley",
        illustrator: "",
        themes: "be yourself",
        myRating: 5,
        imgLocation: "images/daisy.jpg",
        imgAltText: "Cover of Daisy by Jessixa Bagley"
    },
    {
        bookTitle: "Walrus in the Bathtub",
        author: "",
        illustrator: "",
        themes: "change",
        myRating: 5,
        imgLocation: "images/walrus-in-the-bathtub.jpg",
        imgAltText: "Cover of Walrus in the Bathtub by "
    },
    {
        bookTitle: "Maple and Willow Apart",
        author: " ",
        illustrator: "",
        themes: "change",
        myRating: 5,
        imgLocation: "images/maple-and-willow-apart.jpg",
        imgAltText: "Cover of Maple and Willow Apart by "
    },
    {
        bookTitle: "Little Tree",
        author: " ",
        illustrator: "",
        themes: "change",
        myRating: 5,
        imgLocation: "images/little-tree.jpg",
        imgAltText: "Cover of Little Tree by "
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const storybookCards = document.querySelector(".storybook-imgs");
    // create function to create storybook cards
    function createStorybookCards(storybooks) {
        storybookCards.innerHTML = ""; // clear any existing content
        storybooks.forEach(function (storybook) { // like saying "for each storybook in storybooks"
            const card = document.createElement("figure"); // creature a figure
            card.innerHTML = `
                <h4>${storybook.bookTitle}</h4>
                <p>Author: ${storybook.author}</p>
                <p>My Rating: ${storybook.myRating} ⭐️</p>
                <p>Themes: ${storybook.themes}</p>
                <img src="${storybook.imgLocation}" alt="${storybook.imgAltText}" loading="lazy">
            `
            storybookCards.appendChild(card); // append it so it shows up on the html doc
        })
    }

    // now call the function to create the intitial storybook cards
    createStorybookCards(storybooks);

    const resilienceLink = document.querySelector("#resiliencelink");
    // when user clicks resilience
    resilienceLink.addEventListener("click", () => {
        const resilienceStorybooks = storybooks.filter(storybook => storybook.themes.includes("resilience"));
        createStorybookCards(resilienceStorybooks);
        storybookCards.innerHTML = `<h3>Stories About Resilience</h3> ${storybookCards.innerHTML}`;
    })

    // when user clicks regulation
    const regulationLink = document.querySelector("#regulationlink");
    regulationLink.addEventListener("click", () => {
        const regulationStorybooks = storybooks.filter(storybook => storybook.themes.includes("regulation"));
        createStorybookCards(regulationStorybooks);
        storybookCards.innerHTML = `<h3>Stories About Emotional Regulation</h3> ${storybookCards.innerHTML}`;
    })

    // when user clicks death
    const deathLink = document.querySelector("#deathlink");
    deathLink.addEventListener("click", () => {
        const deathStorybooks = storybooks.filter(storybook => storybook.themes.includes("death"));
        createStorybookCards(deathStorybooks);
        storybookCards.innerHTML = `<h3>Stories About Death</h3> ${storybookCards.innerHTML}`;
    })

    // when user clicks goodbyes
    const goodbyeLink = document.querySelector("#goodbyeslink");
    goodbyeLink.addEventListener("click", () => {
        const goodbyeStorybooks = storybooks.filter(storybook => storybook.themes.includes("goodbye"));
        createStorybookCards(goodbyeStorybooks);
        storybookCards.innerHTML = `<h3>Stories About Goodbyes</h3> ${storybookCards.innerHTML}`;
    })

    // when user clicks be yourself
    const beYourselfLink = document.querySelector("#beyourselflink");
    beYourselfLink.addEventListener("click", () => {
        const beYourselfStorybooks = storybooks.filter(storybook => storybook.themes.includes("be yourself"));
        createStorybookCards(beYourselfStorybooks);
        storybookCards.innerHTML = `<h3>Stories About Being Yourself</h3> ${storybookCards.innerHTML}`;
    })

})



