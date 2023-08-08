// script.js
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }
});

// Set the initial theme based on user preference or default
// You might need to implement this based on user settings
// For example: const initialTheme = localStorage.getItem('theme') || 'light-theme';
// body.classList.add(initialTheme);
