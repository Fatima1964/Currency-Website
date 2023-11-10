// Select the container element with the class 'snowfall-container'
const container = document.querySelector('.snowfall-container');

// Define the number of dollar signs to create
const numberOfSnowflakes = 30;

// Loop to create the specified number of dollar signs
for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}

// Function to create a dollar sign element
function createSnowflake() {
    // Create a new 'div' element for the dollar sign
    const snowflake = document.createElement('div');

    // Set the CSS class for the dollar sign
    snowflake.className = 'snowflake';

    // Set a random horizontal position for the dollar sign
    snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position

    // Set a random animation duration for the dollar sign
    snowflake.style.animationDuration = `${3 + Math.random() * 7}s`; // Random animation duration

    // Append the dollar sign to the container
    container.appendChild(snowflake);
}
