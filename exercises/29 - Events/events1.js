const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

const buyButtons = document.querySelectorAll('button.buy');

const handleClick = event => {
  console.log(event);
};

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

buyButtons.forEach(element => {
  console.log(element);
  element.addEventListener('click', handleClick);
});
