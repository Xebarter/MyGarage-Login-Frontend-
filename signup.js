document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!fullname || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert(`Welcome to MyGarage, ${fullname}!\nYour account has been successfully created.`);
    // Send data to the backend server for registration
});
