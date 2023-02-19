module.exports = function toReadable (number) {
	const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 
	if (number === 0) return 'zero';
	if (number < 20) return ones[number];
	if (number < 100) return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + ones[number % 10] : '');
	
	if (number < 1000) {
		if ((number % 100) === 0){
			return ones[Math.floor(number / 100)] + ' hundred';
		} else {
			return ones[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100);
		}
	}
		
	if (number < 1000000) return toReadable(Math.floor(number / 1000)) + ' thousand ' + toReadable(number % 1000);
	if (number < 1000000000) return toReadable(Math.floor(number / 1000000)) + ' million ' + toReadable(number % 1000000);
	return toReadable(Math.floor(number / 1000000000)) + ' billion ' + toReadable(number % 1000000000);
}
