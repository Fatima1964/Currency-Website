document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'e2ff1b64531b9a7afaf95949'; // Your API key
  const apiEndpoint = 'https://v6.exchangerate-api.com/v6/' + apiKey + '/latest/USD';

  // Currency Conversion Section
  const amountInput = document.getElementById('amount');
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');
  const convertButton = document.getElementById('convert');
  const resultOutput = document.getElementById('result');

  function populateCurrencyOptions() {
      fetch(apiEndpoint)
          .then((response) => response.json())
          .then((data) => {
              const currencies = Object.keys(data.conversion_rates);
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

  convertButton.addEventListener('click', () => {
      const amount = amountInput.value;
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;

      if (!amount || fromCurrency === '' || toCurrency === '') {
          resultOutput.innerText = 'All fields are required for conversion';
          return;
      }

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
      amountInput.value = '';
      resultOutput.innerText = '';
      fromCurrencySelect.selectedIndex = 0;
      toCurrencySelect.selectedIndex = 0;
      resultOutput.innerText = 'Conversion';
  });

  populateCurrencyOptions();
});
