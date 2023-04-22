function convert() {
	const fromCurrency = document.getElementById('from-currency').value;
	const toCurrency = document.getElementById('to-currency').value;
	const amountInput = document.getElementById('amount-input').value;
	const output = document.getElementById('output');

	const conversionRates = {
		USD: {
			NPR: 131.36 // conversion rate from USD to Nepali Rupees
		},
		EUR: {
			NPR: 144.07 // conversion rate from EUR to Nepali Rupees
		},
		GBP: {
			NPR: 162.83 // conversion rate from GBP to Nepali Rupees
		},
		INR: {
			NPR: 1.6 // conversion rate from INR to Nepali Rupees
		}
	};

	const convertedAmount = amountInput * conversionRates[fromCurrency][toCurrency];

	output.innerHTML = `${amountInput} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
