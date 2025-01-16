document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
      alert(`Welcome back to MyGarage!\n\nEmail: ${email}`);
      // Backend authentication call can be added here.
  } else {
      alert('Please fill in both email and password fields.');
  }
});
