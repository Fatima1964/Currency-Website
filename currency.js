// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'e2ff1b64531b9a7afaf95949'; // Your API key
    const apiEndpoint = 'https://v6.exchangerate-api.com/v6/' + apiKey + '/latest/USD';
  
    // Currency Conversion Section
    const amountInput = document.getElementById('amount'); // Get the input field for the amount
    const fromCurrencySelect = document.getElementById('fromCurrency'); // Get the select for the 'from' currency
    const toCurrencySelect = document.getElementById('toCurrency'); // Get the select for the 'to' currency
    const convertButton = document.getElementById('convert'); // Get the 'Convert' button
    const resultOutput = document.getElementById('result'); // Get the element to display the result
  
    // Function to populate the currency options in the selects
    function populateCurrencyOptions() {
        fetch(apiEndpoint)
            .then((response) => response.json())
            .then((data) => {
                // Extract the list of currencies from the API response
                const currencies = Object.keys(data.conversion_rates);
  
                // Create options for 'from' and 'to' currencies and add them to the respective select elements
                currencies.forEach((currency) => {
                    const option1 = document.createElement('option');
                    option1.value = currency;
                    option1.text = currency;
                    fromCurrencySelect.appendChild(option1);
  
                    const option2 = document.createElement('option');
                    option2.value = currency;
                    option2.text = currency;
                    toCurrencySelect.appendChild(option2);
                });
            });
    }
  
    // Event listener for the 'Convert' button
    convertButton.addEventListener('click', () => {
        const amount = amountInput.value;
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
  
        // Check if any of the required fields are empty
        if (!amount || fromCurrency === '' || toCurrency === '') {
            resultOutput.innerText = 'All fields are required for conversion';
            return;
        }
  
        // Fetch the latest exchange rate data
        fetch(apiEndpoint)
            .then((response) => response.json())
            .then((data) => {
                // Calculate the conversion rate and the converted amount
                const conversionRate = data.conversion_rates[toCurrency] / data.conversion_rates[fromCurrency];
                const convertedAmount = (amount * conversionRate).toFixed(2);
  
                // Display the conversion result in the resultOutput element
                resultOutput.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            })
            .catch((error) => {
                resultOutput.innerText = 'Error: Unable to fetch conversion data';
            });
    });
  
    // Event listener for the 'Reset' button
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => {
        // Reset the input fields and the result output
        amountInput.value = '';
        resultOutput.innerText = '';
        fromCurrencySelect.selectedIndex = 0;
        toCurrencySelect.selectedIndex = 0;
        resultOutput.innerText = 'Conversion';
    });
  
    // Populate the currency options when the page loads
    populateCurrencyOptions();
  });
  