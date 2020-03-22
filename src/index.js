module.exports = function toReadable (number) {
  const digits = {
    '0': 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine',
    '10' : 'ten',
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety'
  };

  let numberString = number.toString();
  let hundreds = '';
  let dozens = '';
  if (numberString == '0') {
    return 'zero';
  }
  if (numberString.length == 3) {
    hundreads = digits[numberString['0']] + ' hundred';
    numberString = numberString.slice(1);
    if (numberString.endsWith('00')) {
      return hundreads;
    } else if (numberString.endsWith('0')) {
      return hundreads + ' ' + digits[numberString['0']+'0'];
    } else if (Number(numberString) < 20) {
      if (numberString.startsWith('0')) {
        return hundreads + ' ' + digits[numberString['1']];
      } else {
        return hundreads + ' ' + digits[numberString];
      }
    } else {
      return hundreads + ' ' + digits[numberString['0']+'0'] + ' ' + digits[numberString['1']];
    }
  }
  if (numberString.length == 2) {
    if (number < 20) {
      return digits[numberString];
    } else {
      if (numberString.endsWith('0'))  {
        return digits[numberString['0']+'0'];
      } else {
        return digits[numberString['0']+'0'] + ' ' + digits[numberString['1']];
      }
    }
  }
  if (numberString.length == 1) {
    return digits[numberString['0']];
  }
}
