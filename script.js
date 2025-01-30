document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Collect user input
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    try {
        // Send login request to the backend
        const response = await fetch('https://mygarage-login-backend.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include' // Ensures cookies are sent with the request
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();

            // Store JWT token securely in HTTP-only cookies (handled by backend)
            document.cookie = `token=${data.token}; path=/; Secure; HttpOnly; SameSite=Strict`;

            // Extract username from email
            const userName = email.split('@')[0]; 

            // Redirect to landing page
            window.location.href = `https://my-garage-login-frontend.vercel.app/landing.html?name=${encodeURIComponent(userName)}`;

        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    } catch (err) {
        console.error('Error connecting to the server:', err);
        alert('Failed to connect to the server. Please check your internet connection or try again later.');
    }
});
