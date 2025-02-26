const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenArr = [];
let j = 0;
for(let i = 0; i < nums.length; i++){
    const thisEl = nums[i]
    if(thisEl % 2 == 0){
        evenArr[j] = thisEl
        j++
    }
}

console.log(evenArr);


const evenArrFilter = nums.filter(numb => numb % 2 == 0);
console.log(evenArrFilter);
