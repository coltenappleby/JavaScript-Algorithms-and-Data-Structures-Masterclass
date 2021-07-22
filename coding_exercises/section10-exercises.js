// ***************************************************
// *** Coding Exercises from Section 10 - Linear Search ***
// ***************************************************


// ** Coding Exercise 24: Linear Search ** 

// find the index of the number in the array. if it doesnt exist return -1
function linearSearch(arr, n){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i
        }
    }
    return -1
}
// console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
// console.log(linearSearch([100], 100)) // 0

// ** Coding Exercise 24: Linear Search ** 
function binarySearch(arr, n){

    function helper(i){
        if(arr[i] === n) {
            return i
        } else if (n < arr[i]) {
            return helper((arr.length + i)/2)
        } else {
            return helper(i/2)
        }  
    }
    return helper(arr.length/2);
}

function binarySearch(arr, n){
    let k = 0
    let min = 0
    let max = arr.length

    if(n > arr[max-1] || n < arr[min]){
        return -1
    }

    while(true){
        let i = Math.floor((max-min)/2) + min
        if(arr[i] === n) {
            return i
        } else if (n > arr[i]) {
            min = i
        } else if (n < arr[i]) {
            max = i
        } else {
            return -1
        }
    }
}



console.log(binarySearch([10, 15, 20, 25, 30], 15)) // 1
console.log(binarySearch([100], 100)) // 0

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))