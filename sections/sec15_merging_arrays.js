const merge = (arr1, arr2) => {
    let i = 0, j = 0
    let arr = []
    while(i < arr1.length || j < arr2.length){
        arr1[i] < arr2[j] ? 
        (arr.push(arr1[i]), i++) :
        (arr.push(arr2[j]), j++);
    }
    return arr
} 

merge([5,6],[4]) // merge fails 

// This doesn's work if the second array is shorter than the first. 
// j will go out of bounds and arr[arr.length+1] will return undefined. 
// undefined is smaller than the any number so the program will increment
// arr with undefined. 


const merge = (arr1, arr2) => {
    let i = 0, j = 0
    let arr = []
    while(i < arr1.length && j < arr2.length){
        arr1[i] < arr2[j] ? 
        (arr.push(arr1[i]), i++) :
        (arr.push(arr2[j]), j++);
    }
    while(i < arr1.length){
        arr.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        arr.push(arr2[j])
        j++;
    }
    return arr
} 

merge([1,4], [2,5])


