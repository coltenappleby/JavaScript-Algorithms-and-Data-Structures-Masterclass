// ***************************************************
// *** Coding Exercises from Section 8 - Recursion ***
// ***************************************************


// ** Coding Exercise 10: Power ** 
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2) {
    // should return the power of the base to the exponent
    if (num2 === 1) {
        return num1
    }
    return num1 * power(num1, num2-1)
}

function power(num1, num2) {
    // should return the power of the base to the exponent
    if (num2 === 0) return 1
    
    return num1 * power(num1, num2-1)
}

console.log(power(2, 3))
console.log(power(2, 4))
