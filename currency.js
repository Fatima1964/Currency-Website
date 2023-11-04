document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'e2ff1b64531b9a7afaf95949'; // My API key
  const apiEndpoint = 'https://v6.exchangerate-api.com/v6/' + apiKey + '/latest/USD';

  const amountInput = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');
  const convertButton = document.getElementById('convert');
  const resultOutput = document.getElementById('result');

  // Populate both 'fromCurrency' and 'toCurrency' select elements with currency options
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data.conversion_rates);
      currencies.forEach((currency) => {
        // Populate 'fromCurrency' select
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.text = currency;
        fromCurrencySelect.appendChild(option1);

        // Populate 'toCurrency' select
        const option2 = document.createElement('option');
        option2.value = currency;
        option2.text = currency;
        toCurrencySelect.appendChild(option2);
      });
    });

  // Event listener for the 'Convert' button
  convertButton.addEventListener('click', () => {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Make a GET request to fetch the conversion rate
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const conversionRate = data.conversion_rates[toCurrency] / data.conversion_rates[fromCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);
        resultOutput.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch((error) => {
        resultOutput.innerText = 'Error: Unable to fetch conversion data';
      });
  });

  const resetButton = document.getElementById('reset');

  resetButton.addEventListener('click', () => {
    // Clear the input fields and result output
    amountInput.value = '';
    resultOutput.innerText = '';
    fromCurrencySelect.selectedIndex = 0;
    toCurrencySelect.selectedIndex = 0;
    resultOutput.innerText = 'Conversion';
  });

  // Event listener for the 'Submit' button
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const postData = {
      name: name,
      email: email,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('POST request successful:', data);
      
      nameInput.value = '';
      emailInput.value = '';
      })   
        .catch((error) => {
        console.error('Error sending POST request:', error);
      });
  });
});
