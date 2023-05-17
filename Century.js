function whatCentury(year) {
  const century = Math.ceil(year / 100);
  const lastTwoDigits = century % 100;
  const suffix = getSuffix(lastTwoDigits);
  return century + suffix;
}

function getSuffix(lastTwoDigits) {
  const lastDigit = lastTwoDigits % 10;
  const secondLastDigit = Math.floor(lastTwoDigits / 10) % 10;

  if (secondLastDigit === 1 || lastDigit === 0 || lastDigit > 3) {
    return "th";
  } else if (lastDigit === 1) {
    return "st";
  } else if (lastDigit === 2) {
    return "nd";
  } else if (lastDigit === 3) {
    return "rd";
  }
}


console.log(whatCentury("1999"));   // Output: "20th"
console.log(whatCentury("2011"));   // Output: "21st"
console.log(whatCentury("2154"));   // Output: "22nd"
console.log(whatCentury("2259"));   // Output: "23rd"
console.log(whatCentury("1124"));   // Output: "12th"
console.log(whatCentury("2000"));   // Output: "20th"

