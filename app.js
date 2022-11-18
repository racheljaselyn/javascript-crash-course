// let count = 1;

// while (count <= 100) {
    // console.log(count);
    // count = count + 1;
// }

// divisible by 3 = frontend
// divisible by 5 = simplified
// divisible by 3 = frontend simplified
// not divisible by 3 or 5 = print the number

// let cash = 30
// let price = 40
// let difference = cash - price
// let isStoreOpen = true


// if (cash > price) {
//     console.log(`You've paid extra here's your ${difference} in change`)
// }

// else if (cash === price) {
// console.log(`you've paid the exact amount, have a nice day!`)
// }

// else {
//     console.log(`not enough money - you still owe ${difference * -1}`)
// }


// for (let i = 1; i <= 100; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} great work you're divisible by 3 and 5`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} okay - you're only divisible by 5`)
//     }

//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }


// let str = ("Frontend Simplified")
// let i = [0]

// for (i = [0]; i < [19]; ++i) {
// console.log(str[i])
// }

// celsius to Fahrenheit formula:
// F = C * 1.8 + 32

// const celsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }

// console.log(celsiusToFahrenheit(0));

let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5 = 100

let arr = [20, 30, 40, 50, 100]

// // first element of array
// console.log(arr[0])

// // last element in array
// console.log(arr[arr.length - 1])


// // add element onto end of array
// arr.push(200)

// console.log(arr)

let newArr = arr.filter((element) => {
return (element < 50)
})

console.log(newArr)

