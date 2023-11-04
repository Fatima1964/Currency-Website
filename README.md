# Currency-Exchange# Currency-Website
# Currency Converter Readme

This repository contains a simple web-based currency converter application. Users can input an amount, select the source currency, choose the target currency, and click the "Convert" button to get the converted amount. Additionally, there is a "Reset" button to clear the input fields and start over.

## Project Files

- **index.html**: This is the main HTML file that structures the currency converter web page. It includes the necessary HTML elements for the application.

- **currency.css**: The CSS file that styles the web page. It defines the layout, appearance, and animations used in the application.

- **currency.js**: The JavaScript file that handles the currency conversion logic. It uses an API to fetch exchange rate data and perform the currency conversion.

- **logo.png**: The project logo that is displayed in the header.

- **back2.jpg**: The background image for the web page.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Open the `index.html` file in your web browser to use the currency converter.

3. Input the amount, select the source and target currencies, and click the "Convert" button to see the conversion result.

## Features

- **Currency Selection**: Users can choose the source and target currencies from the dropdown menus.

- **Conversion**: Clicking the "Convert" button will fetch the latest exchange rates and display the converted amount.

- **Reset**: The "Reset" button allows users to clear the input fields and start a new conversion.

- **Stylish Design**: The application has a visually appealing design with animations and a responsive layout.

## Dependencies

The project uses the ExchangeRate Vhttps://www.exchangerate-api.com/ API to fetch exchange rate data. You need to obtain an API key to make it work. Replace the `apiKey` variable in `currency.js` with your own API key.  Also logo was designed in Canva https://www.canva.com/.

```javascript
const apiKey = 'your-api-key'; 
```

## Customization

You can customize the application by modifying the HTML, CSS, and JavaScript files. Update the styles in `currency.css`, and modify the behavior in `currency.js` to fit your needs.

## Contributing

Feel free to contribute to this project by opening issues, submitting pull requests, or suggesting improvements. Your contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy using the Currency Converter! If you have any questions or encounter any issues, please don't hesitate to reach out to the project contributors.