// Select the container element with the class 'snowfall-container'
const container = document.querySelector('.snowfall-container');

// Define the number of snowflakes to create
const numberOfSnowflakes = 20;

// Loop to create the specified number of snowflakes
for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}

// Function to create a snowflake element
function createSnowflake() {
    // Create a new 'div' element for the snowflake
    const snowflake = document.createElement('div');

    // Set the CSS class for the snowflake
    snowflake.className = 'snowflake';

    // Set a random horizontal position for the snowflake
    snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position

    // Set a random animation duration for the snowflake
    snowflake.style.animationDuration = `${3 + Math.random() * 7}s`; // Random animation duration

    // Append the snowflake to the container
    container.appendChild(snowflake);
}
