// script.js

// This script file can be used for basic interactivity
// For example, handling search functionality or toggling UI elements
// script.js

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Example: Show an alert when the search button is clicked
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const jobTitle = document.querySelector('.search-bar input[type="text"]').value;
        const location = document.querySelector('.search-bar input[type="text"]:nth-child(2)').value;
        alert(`Searching for jobs with title "${jobTitle}" in "${location}"`);
    });
});
