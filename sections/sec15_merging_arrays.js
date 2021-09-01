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

merge([1,4], [2,5])