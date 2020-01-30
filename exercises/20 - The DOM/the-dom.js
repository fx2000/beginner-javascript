const pic = document.querySelector('.nice');
const toggleRound = () => pic.classList.toggle('round');

console.log(pic.classList);

pic.addEventListener('click', toggleRound);

pic.alt = 'Placeholder image';

const newList = document.createElement('li');
newList.textContent = 'List Item 1';

const targetDiv = document.querySelector('.list');

targetDiv.insertAdjacentElement('beforeend', newList);

console.log(newList);
