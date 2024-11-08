function checkProbabilityTheory(count, min = 100, max = 1000) {
    let arrayOfNumbers = [];
    for (let i = 0; i < count; i++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayOfNumbers.push(random);
    }
    let countOfEvenNumbers = 0;
    let countOfOddNumbers = 0;
    for (let i =0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 === 0) {
            countOfEvenNumbers++;
        } else {
            countOfOddNumbers++;
        }
    }
    return {
        arrayOfNumbers,
        countOfGeneratedNumbers: count,
        countOfEvenNumbers,
        countOfOddNumbers,
        percentageOfEvenNumbers: (countOfEvenNumbers / count * 100).toFixed(2) + '%',
        percentageOfOddNumbers: (countOfOddNumbers / count * 100).toFixed(2) + '%'
    }
}

let test = checkProbabilityTheory(10000);
console.log(test);