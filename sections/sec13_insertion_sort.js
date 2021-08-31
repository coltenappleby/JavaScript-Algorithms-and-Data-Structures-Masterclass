const swap = (arr, indx1, indx2) => {
    const temp = arr[indx1]
    arr[indx1] = arr[indx2]
    arr[indx2] = temp
}

function insertionSort(arr){
    for(let i=1; i < arr.length; i++){
        let currentNum = arr[i]
        for(let j=i-1; j > -1 && arr[j] > currentNum; j--){
            arr[j+1] = arr[j]
            console.log("i: ", i, ", j: ", j, "swap", arr)
            arr[j] = currentNum;
        }

        
    }

    return arr
}
clear()
console.log(insertionSort([2,1,9,76,4]))