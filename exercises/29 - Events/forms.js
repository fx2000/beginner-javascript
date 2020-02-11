console.log('it works');

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = event.currentTarget.name.value;
});
