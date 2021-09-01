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
        arr.push(arr1[j])
        j++;
    }
    return arr
} 

clear()
merge([5,6],[4])



const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = arr.length/2
    let left =  mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

merge([3, 10, 5, 4])