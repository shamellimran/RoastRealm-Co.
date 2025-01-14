// Get the login form element
const loginForm = document.querySelector('form');

// Add an event listener to the login form's submit event
loginForm.addEventListener('submit', (e) => {
  // Get the username and password input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate the username and password
  if (username === '' || password === '') {
    alert('Please enter both username and password');
  }

  // Redirect to the homepage
  window.location.href = 'index.html';
});