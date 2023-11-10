// Add an event listener to the form
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data from input fields
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send a POST request to the server
    fetch('http://localhost:3000/submit-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Display the result message from the server
        document.getElementById('result').innerText = data.message;
    })
    .catch(error => {
        // Handle errors and display an error message
        document.getElementById('result').innerText = 'Error: Unable to submit email';
    });
});
