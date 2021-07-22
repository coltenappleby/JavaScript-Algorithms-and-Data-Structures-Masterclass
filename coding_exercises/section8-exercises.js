// ***************************************************
// *** Coding Exercises from Section 8 - Recursion ***
// ***************************************************


// ** Coding Exercise 10: Power ** 
function power(num1, num2) {
    // should return the power of the base to the exponent
    if (num2 === 1) {
        return num1
    }
    return num1 * power(num1, num2-1)
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2) {
    // should return the power of the base to the exponent
    if (num2 === 0) return 1

    return num1 * power(num1, num2-1)
}
// console.log(power(2, 3))
// console.log(power(2, 4))


// ** Coding Exercise 11: factorial **
function factorial(num){
   if (num === 0) return 1
   return num * factorial(num-1)
}
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040


// ** Coding Exercise 12: productOfArray **
function productOfArray(arr){
    if(arr.length === 1) return arr[0]
    return arr[0] * helper(arr.slice(1))
}
// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60


// ** Coding Exercise 12: productOfArray **
