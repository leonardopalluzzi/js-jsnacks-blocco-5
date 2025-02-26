const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const newArr = [];
for(let i = 0; i < numbers.length; i++){
    const thisEl = numbers[i];
    newArr[i] = thisEl + 1
}

console.log(newArr);

const newArrMap = numbers.map(numb => (numb + 1));
console.log(newArrMap);

