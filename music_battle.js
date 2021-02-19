// Declare a new Array
let numeros = new Array;

// Set the values 1 - 100 into Array
for (let i = 1; i <= 100; i++) {
    numeros[i] = i;
}

// Set the Music value in multiples of 3
for (let i = 3; i <= 100; i += 3) {
    numeros[i] = 'Music';
}

// Set the TI value in multiples of 5
for (let i = 5; i <= 100; i += 5) {
    numeros[i] = 'TI';
}

// Set the Musical value in multiples of 3 and 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        numeros[i] = "Musical";
    }
}

// Print the values
numeros.forEach(element => {
    console.log(element)
});