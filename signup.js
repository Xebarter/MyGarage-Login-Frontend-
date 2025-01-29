document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Collect user input
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate input
    if (!email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    try {
        // Make POST request to backend
        const response = await fetch('https://mygarage-login-backend.onrender.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        // Handle the response
        if (response.ok) {
            alert('Registration successful! You can now log in.');
            // Redirect to login page
            window.location.href = 'index.html';
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`); // Notify user of error
        }
    } catch (err) {
        console.error('Error connecting to the server:', err);
        alert('Failed to connect to the server. Please try again later.');
    }
});
