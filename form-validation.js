// Event listener for the 'Submit' button
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;

    // Simple validation checks
    if (!isValidName(nameInput)) {
        alert('Please enter a valid name without special characters.');
        return;
    }

    if (!isValidEmail(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!messageInput) {
        alert('Please enter a message.');
        return;
    }

    // If all fields are valid, you can proceed with form submission or other actions.
    // You may want to replace the 'alert' calls with custom error messages or form submission logic.
});

// Function to check if the name is valid
function isValidName(name) {
    // Regular expression allowing letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[A-Za-z\s'-]+$/;
    return nameRegex.test(name);
}

// Function to check if the email is in a valid format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
