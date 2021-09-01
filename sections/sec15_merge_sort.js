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



const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left =  mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

clear()
mergeSort([3, 10, 5, 4])
mergeSort([3, 10, 5, 4, 11, 12, 13, 0, -1, 14, 5, 3, 2])


// Big O: O(n log n)
// 32 -> 16 -> 8 -> 4 -> 2 -> 1
// 5 Splits -- this is log base 2
// 2 of what power gets to 8