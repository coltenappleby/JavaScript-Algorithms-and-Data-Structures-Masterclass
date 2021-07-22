// ***************************************************
// *** Coding Exercises from Section 10 - Linear Search ***
// ***************************************************


// ** Coding Exercise 24: Linear Search ** 

// find the index of the number in the array. if it doesnt exist return -1
function linearSearch(arr, n){
    // add whatever parameters you deem necessary - good luck!

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i
        }
    }

    return -1
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([100], 100)) // 0