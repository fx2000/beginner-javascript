// Make a div
const newDiv = document.createElement('div');

// add a class of wrapper to it
newDiv.classList.add('wrapper');

// put it into the body
document.body.insertAdjacentElement('afterbegin', newDiv);

// make an unordered list
const newList = document.createElement('ul');
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
newList.insertAdjacentHTML(
  'afterbegin',
  `
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  `
);
newDiv.insertAdjacentElement('afterbegin', newList);
// create an image
const newImg = document.createElement('img');

// set the source to an image
newImg.src = 'https://placekitten.com/200/300';
// set the width to 250
newImg.width = 250;
// add a class of cute
newImg.classList.add('cute');
// add an alt of Cute Puppy
newImg.alt = 'Cute Puppy';
// Append that image to the wrapper
newDiv.insertAdjacentElement('beforeend', newImg);
// with HTML string, make a div, with two paragraphs inside of it
const anotherDiv = `
<div>
    <p>This is the first paragraph</p>
    <p>This is the second paragraph</p>
</div>
`;
// put this div before the unordered list from above
newDiv.insertAdjacentHTML('afterbegin', anotherDiv);
// add a class to the second paragraph called warning
newDiv.firstElementChild.lastElementChild.classList.add('warning');
// remove the first paragraph
newDiv.firstElementChild.firstElementChild.innerHTML = '';
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const deleteDiv = event => {
  event.target.parentElement.remove();
};

const dogYears = age => age * 7;

const generatePlayerCard = ([name, age, height]) => `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${dogYears(
  age
)}. That would be a tall dog!</p>
    <button onclick="deleteDiv(event)">Delete</button>
    </div>
    `;

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
const people = [
  ['Daniel', 39, '1.9m'],
  ['Miranda', 7, '1.2m'],
  ['Belkys', 35, '1.6m'],
  ['Galileo', 10, '0.5m'],
];

// append those cards to the div
let i = 0;
while (i <= 3) {
  cardDiv.insertAdjacentHTML('beforeend', generatePlayerCard(people[i]));
  i += 1;
}

// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
