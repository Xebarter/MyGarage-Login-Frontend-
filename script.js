document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Collect user input
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        // Make POST request to backend
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();

            // Store JWT in localStorage for authenticated requests
            localStorage.setItem('token', data.token);

            // Redirect to landing page with user's name
            const userName = email.split('@')[0]; // Extract name from email as an example
            window.location.href = `landing.html?name=${encodeURIComponent(userName)}`;
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`); // Notify user of error
        }
    } catch (err) {
        console.error('Error connecting to the server:', err);
        alert('Failed to connect to the server. Please try again later.');
    }
});
