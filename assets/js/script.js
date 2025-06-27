// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"


console.log("------1------")

function swapLetters(word) {
    print = ""
    for (let i = word.length - 1; i >= 0; i--) {
        print += word[i]
    }
    return print
}
let result1 = swapLetters("javascript")
console.log(result1)



console.log("------2------")






// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(word) {
    let j = 0
    for (let i = word.length - 1; i >= 0; i--) {
        if (word[j] == word[i]) {
            j++
        } else { return false }
    }
    return true
}
let result21 = isPalindrome("madam")
console.log(result21)
let result22 = isPalindrome("hello")
console.log(result22)


console.log("------3------")






// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9




function theBiggestNum(numbers) {
    let biggest = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggest) {
            biggest = numbers[i]
        }
    }
    return biggest
}

let result3 = theBiggestNum([15, 587, 3, 94, 2])
console.log(result3)


console.log("------4------")









// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120


function Factorial(num) {
    let fact = num
    for (let i = 1; i < num; i++) {
        fact = fact * i
    }
    return fact
}
let result4 = Factorial(6)
console.log(result4)





console.log("------5------")









// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)

function isPrime(num) {
    let a = []
    let j = 0
    let print = ""
    if (typeof(num) != "number") { return `it is not a number` } else {
        for (let i = 2; i < num - 1; i++) {
            if (num % i == 0) {
                a[j] = i
                j++
            }
        }

        if (a.length != 0) {
            print = "false (because it's divisible by "
            for (let i = 0; i < a.length; i++) {
                print += a[i]
                if (i == a.length - 2) {
                    print += " and "
                } else if (i >= 0 && i != a.length - 1) {
                    print += " , "
                }
            }
            print += ")"
        } else {
            print = "true"
        }

        return print
    }
}


let result51 = isPrime(6)
console.log(result51)
let result52 = isPrime(7)
console.log(result52)
let result53 = isPrime("a")
console.log(result53)










console.log("------6------")





// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]


function removeDuplicates(array) {
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j <= array.length; j++) {
            if (array[j] > array[j + 1]) {

                let a = array[j]
                array[j] = array[j + 1]
                array[j + 1] = a
            }
        }
    }
    let newArray = []
    let j = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            continue
        } else
            newArray[j] = array[i]
        j++
    }
    return newArray
}
let result6 = removeDuplicates([1, 2, 2, 3, 4, 4, 6, 4, 5, 4, 1, 7, 8])
console.log(result6)

console.log("------7------")















// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55


function findMissing(numbers, start, range) {
    for (let i = 0; i <= numbers.length; i++) {
        for (let j = 0; j <= numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {

                let a = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = a
            }
        }
    }

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[0] != start) {
            return `the missing number is ${start}`
        }
        if ((numbers[i + 1] - numbers[i]) !== 1) {
            return `the missing number is ${numbers[i]+1}`
        }
        if (numbers.length == range) {
            return `there is no missing number`
        }
    }
    return `the missing number is ${start + range-1}`
}
let result7 = findMissing([1, 2, 3, 4, 5, 6, 7, 9, 10], 1, 10)
console.log(result7)





console.log("------8------")





// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"

function Capitalize(sentence) {

    let print = sentence[0].toUpperCase()
    for (let i = 1; i < sentence.length; i++) {
        if (sentence[i - 1] === " ") {
            {
                print += (sentence[i]).toUpperCase()

            }
        } else {
            {
                print += sentence[i]
            }
        }
    }


    return print
}

let result8 = Capitalize("hello world from javascript")
console.log(result8)



console.log("------9------")







// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false

function Anagram(...words) {

    if (words[0].length != words[1].length)
        return false
    else {

        let chars = []
        let a
        let word1 = []
        let word2 = []


        for (let i = 0; i < words[0].length; i++) {
            word1[i] = words[0][i]
            word2[i] = words[1][i]

        }
        for (let i = 0; i < word1.length; i++) {
            for (let j = 0; j < word1.length - 1; j++) {
                if (word1[j] > word1[j + 1]) {
                    let a = word1[j]
                    word1[j] = word1[j + 1]
                    word1[j + 1] = a
                }
            }
        }

        for (let i = 0; i < word2.length; i++) {
            for (let j = 0; j < word2.length - 1; j++) {
                if (word2[j] > word2[j + 1]) {
                    let a = word2[j]
                    word2[j] = word2[j + 1]
                    word2[j + 1] = a
                }
            }
        }


        for (let i = 0; i < word1.length - 1;) {
            if (word1[i] != word2[i]) {
                return false

            } else
                i++
        }
        return true
    }
}
let result91 = Anagram("listen", "silent")
let result92 = Anagram("hello", "world")
let result93 = Anagram("listnen", "sillent")


console.log(result91)
console.log(result92)
console.log(result93)







console.log("------10------")









// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]

function Chunk(arrays, num) {
    let arraychunk = []
    let arraychunk2 = []
    let tallLast = (arrays.length % num)
    let o
    let print = "["

    for (let i = 0; i < arrays.length - tallLast;) {

        for (let j = 0; j < num; j++) {
            arraychunk[j] = arrays[i]
            i++
        }
        print += `[${arraychunk}],`
        j = 0
        o = i
    }

    if (tallLast != 0) {
        for (let k = 0; k < tallLast; k++) {
            arraychunk2[k] = arrays[o]
            o++
        }
        print += `[${arraychunk2}]]`
        return print
    }

}

let result10 = Chunk([1, 2, 3, 4, 5, 6, 7], 2)
console.log(result10)


console.log("------11------")




// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]

function sumToTarget(arrays, num) {
    for (i = 0; i < arrays.length; i++) {
        for (j = 1; j < arrays.length; j++) {
            if (arrays[i] + arrays[j] == num && i != j) { return `${arrays[i]} and ${arrays[j]}` }
        }
    }
    return `there is no numbers`
}

let result111 = sumToTarget([10, 5, 2, 7, 8, 3], 13)
let result112 = sumToTarget([10, 5, 2, 7, 8, 3], 14)
console.log(result111)
console.log(result112)


console.log("------12------")


// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]

function rotateLeft(arrays, num) {
    let newArray = []

    let l = arrays.length - (num % arrays.length)
    for (let i = 0; i < l; i++) {
        newArray[i] = arrays[i + (num % arrays.length)]
    }
    let n = newArray.length
    let j = 0
    while (newArray.length != arrays.length) {
        newArray[n] = arrays[j]
        n++
        j++
    }
    return `[${newArray}]`
}


let result12 = rotateLeft([1, 2, 3, 4, 5, 6, 7], 9)
console.log(result12)





console.log("------13------")













// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function commonInTowArrays(array1, array2) {
    let common = []
    let n = 0
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                common[n] = array2[j]
                n++
            }
        }

    }
    let common2 = []
    let l = 0
    for (let k = 1; k <= common.length; k++) {

        if (common[k - 1] == common[k]) {
            {
                continue
            }
        } else
            common2[l] = common[k - 1]
        l++
    }


    return `[${common2}]`
}

let result13 = commonInTowArrays([1, 1, 2, 3, 4, 5, 6], [2, 3, 3, 3, 3, 5])
console.log(result13)







console.log("------14------")






// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }


function countCharacter(word) {
    word = word.toLowerCase()
    let wordArray = []

    for (let i = 0; i < word.length; i++) {
        wordArray[i] = word[i]
    }

    let a
    for (let i = 0; i < wordArray.length; i++) {
        for (let j = 0; j < wordArray.length - 1; j++) {
            if (wordArray[j] > wordArray[j + 1]) {
                let a = wordArray[j]
                wordArray[j] = wordArray[j + 1]
                wordArray[j + 1] = a
            }
        }
    }
    let count = 0
    let print14 = "{"
    let first = 1
    for (let i = 0; i < wordArray.length;) {
        for (let j = 0; j < wordArray.length; j++) {
            if (wordArray[i] == wordArray[j] && wordArray[i] != wordArray[i + 1] && wordArray[i] != " ")
                count++
        }

        if (count != 0 && first == 1) {
            {
                print14 += `${wordArray[i]}: ${count}`
                first = 0
            }
        } else if (count != 0) {
            print14 += ` ,${wordArray[i]}: ${count}`
        }

        count = 0
        i++
    }

    return `${print14}}`

}

let result14 = countCharacter("hello world")
console.log(result14)








console.log("------15------")






// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]


function flattenANestedArray(array) {
    let flatArray = []
    let nestArray
    let k = 0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {
            flatArray[k] = array[i]
            k++

        } else {
            nestArray = flattenANestedArray(array[i])
            for (let j = 0; j < nestArray.length; j++) {
                flatArray[k] = nestArray[j]
                k++
            }
        }
    }
    return flatArray
}

let result15 = flattenANestedArray([1, [2, 3],
    [4, [5, 6],
        [7, [8, [9, 10]]]
    ]
])
console.log(result15)











console.log("------16------")
    // 16. Find the Longest Word in a Sentence
    // Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"

function theLongest(sentence) {
    let long = 0
    let count = 0
    let test
    let lastLetter = 0
    let letter

    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] != " ") {
            count++
        } else {
            letter = i
            test = count
            if (test > long) {
                long = count
                lastLetter = letter
            }
            count = 0

        }
    }
    if (count - 1 > long) {
        long = count
        lastLetter = sentence.length;
    }

    let wordStart = lastLetter - long
    let wordEnd = lastLetter

    let longWord = ""
    for (let i = wordStart; i < wordEnd; i++) {
        longWord += sentence[i]
    }

    return `${longWord}`
}
let result161 = theLongest("The quick brown fox jumped over the lazy dog")
console.log(result161)
let result162 = theLongest("The quick brown fox jumped over the elefant")
console.log(result162)






console.log("------17------")
    // 17. Find the Most Frequent Element in an Array
    // Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'
function mostFrequent(arr) {
    let a
    let print = ""
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                a = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = a
            }
        }
    }

    let count = 0
    let mostCount = 0
    let result = []
    let n = 0

    for (let i = 1; i < arr.length; i++) {

        if (arr[i - 1] == arr[i]) {
            count++
        }

        if (count > mostCount) {
            mostCount = count
            result[n] = arr[i]
            n++
        }

        count = 1

    }

    for (let i = 0; i < arr.length; i++) {
        if (result[i] == result[i + 1]) {
            result[i] = ""
        }
    }

    for (let i = 0; i < arr.length; i++) {
        print += `${result[i]} `
    }
    return print

}
let result171 = mostFrequent([2, 3, 1, 3])
console.log(result171)
let result172 = mostFrequent(['a', 'b', 'b', 'a'])
console.log(result172)








console.log("------18------")
    // 18. Sort an Array of Objects by a Property
    // Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)
function sortByProperty(...arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]["age"] < arr[j]["age"]) {
                a = arr[j]
                arr[j] = arr[i]
                arr[i] = a

            }
        }
    }
    let print = ``
    for (let i = 0; i < arr.length - 1; i++)
        print += `{name: ${arr[i]["name"]} , age: ${arr[i]["age"]}},`
    print += `{name: ${arr[arr.length - 1]["name"]} , age: ${arr[arr.length - 1]["age"]}}`

    return print

}
let result18 = sortByProperty({ name: "Alice", age: 31 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 })
console.log(result18)







console.log("------19------")
    // 19. Find the First Non-Repeating Character
    // Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

function firstNonRepeating(word) {
    let count = 0
    let endChecked = []

    for (let i = 0; i < word.length; i++) {
        count = 0
        if (endChecked.includes(word[i]))
            continue
        for (let j = 0; j < word.length; j++) {
            if (word[i] == word[j]) {
                count++
            }
        }

        if (count == 1) {
            return word[i]
        }

    }

    return "all of them the same"

}
result191 = firstNonRepeating("abasbs")
console.log(result191)
result192 = firstNonRepeating("swiss")
console.log(result192)









console.log("------20------")
    // 20. Symmetric Difference of Two Arrays
    // Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

function symmetricTwoArray(...arr) {
    let n = []
    let k = 0
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr[1].length; j++) {
            if (arr[0][i] == arr[1][j]) {
                n[k] = [arr[0][i]]
                k++
            }
        }
    }

    let array1 = []
    let o = 0

    for (let i = 0; i < arr[0].length; i++) {
        let here = false

        for (let j = 0; j < n.length; j++) {
            if (arr[0][i] == n[j]) {
                here = true
                break
            }
        }

        if (here != true) {
            array1[o] = arr[0][i]
            o++
        }
    }


    let array2 = []
    let oo = 0
    for (let i = 0; i < arr[1].length; i++) {
        let here = false

        for (let j = 0; j < n.length; j++) {
            if (arr[1][i] == n[j]) {
                here = true
                break
            }
        }

        if (here != true) {
            array2[oo] = arr[1][i]
            oo++
        }
    }

    array1 += `,${array2}`
    let prin = `[`
    for (let i = 0; i < array1.length - 1; i++)
        prin += (`${array1[i]}`)
    prin += (`${array1[array1.length-1]}]`)
    return `${prin}`
}

let result20 = symmetricTwoArray([4, 1, 3, 4], [3, 4, 2, 2, 5])
console.log(result20)