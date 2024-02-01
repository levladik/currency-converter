# Currency Converter App
<a href='http://levladik.github.io/react-user-list' target='blank'>Visit page</a>

This is a simple React application that allows users to convert currency values between two selected currencies. It utilizes the [Open Exchange Rates API](https://openexchangerates.org/) to fetch the latest exchange rates.

## Features

1. **Currency Conversion**: Users can input a value in one currency, and the application will dynamically display the equivalent value in the selected target currency.

2. **Currency Selection**: Users can choose the source and target currencies from a list of available currencies.

## Project Structure

- **App.js**: The main component that holds the state and manages the currency conversion logic.
- **Block.js**: A reusable component for displaying and interacting with currency conversion blocks.

## Dependencies

- React
- [Open Exchange Rates API](https://openexchangerates.org/) for fetching the latest exchange rates.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/levladik/currency-converter.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```


## Usage

1. Select the source currency and input a value in the first block.
2. Select the target currency in the second block to view the equivalent value.
3. The exchange rates are fetched from the Open Exchange Rates API.

## API Key

The application uses the Open Exchange Rates API with the following API key: `c00bca64619341808cbf42a460d40645`. Please replace this key with your own if necessary.

## Contributing

Feel free to contribute to the project by submitting pull requests or opening issues.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.