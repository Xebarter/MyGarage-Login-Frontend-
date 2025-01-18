// Extract the user's name from the query string in the URL
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');

// Update the landing page to greet the user by their name
if (userName) {
    document.getElementById('user-name').textContent = userName;
} else {
    document.getElementById('user-name').textContent = 'Guest'; // Fallback for unknown users
}
