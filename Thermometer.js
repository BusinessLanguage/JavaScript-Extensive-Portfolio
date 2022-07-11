const celsius = 22 // enter temperature in Celsius here
let kelvin = celsius + 273;
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${celsius} degrees Celsius,` +
` which is approximately ${fahrenheit} degrees Fahrenheit` +
` and ${kelvin} degrees Kelvin`);