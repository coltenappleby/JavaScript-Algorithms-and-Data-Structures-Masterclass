let selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let min = i
        for(let j = i+1; j <arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== i) { swap(arr, min, i)
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
        }
    }
    return arr;
}

clear()
console.log(selectionSort([5, 4, 3, 6]))

const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
}