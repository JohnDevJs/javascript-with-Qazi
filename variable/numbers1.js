// const sumArray = (numbers) => {
//     let result = 0;
//     // for loop

//     for (const number of number) {
//         console.log(number)
//         result = result + number 
//     }
//     return { result }
// }

// const nums = [1, 2, 3, 4, 5]
// console.log(sumArray(nums))

const wordFrequency = (phrase) => {
    let Frequency = {}
    words = phrase.split('')
    for (const word of words) {
        console.log(word)
        if (word in Frequency) {
            Frequency[word] += 1
        } else {
            Frequency[word] = 1
        }
    }
    console.log(words)
    return Frequency
}

console.log (wordFrequency('lol what lol yo yo yo'))