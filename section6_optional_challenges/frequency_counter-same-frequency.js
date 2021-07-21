// ** Frequency Counter - sameFrequency **

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. 
// Solution MUST have the following complexities:
// Time: O(n)
// Same Input:
//     sameFrequency(182, 281) // true
//     sameFrequency(34, 14)   // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22, 222)  // false


// const len = Math.ceil(Math.log10(num + 1)); faster way to get length of a string
// start 4:30

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.

    let num1String = num1.toString();
    let num2String = num2.toString();
    let numOneObj = {};

    if(num1String.length !== num2String.length){
        return false;
    }

    for( let i = 0; i < num1String.length; i++) {
        numOneObj[num1String[i]] ? numOneObj[num1String[i]]+=1 : numOneObj[num1String[i]] = 1;
    }
    
    for( let i = 0; i < num2String.length; i++) {
        if(numOneObj[num2String[i]] && numOneObj[num2String[i]]-1 >= 0) {
            numOneObj[num1String[i]]-1;
        }  else {
            return false;
        }
    }
    return true;
    
}

console.log(sameFrequency(22,22))
console.log(sameFrequency(22,222))