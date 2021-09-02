// Pivot Helper Function
// should rearrange items
// move items to the left that are less
// move items to the right that are greater
// This should occur in place; i.e. do not create a new array
// return Index of pivot

// should rearrange items
// move items to the left that are less
// move items to the right that are greater
// This should occur in place; i.e. do not create a new array
// return Index of pviot




const pivot = (arr, startInd=0, end = arr.length) => {
    const swap = (arr, indx1, indx2) => {
        const temp = arr[indx1]
        arr[indx1] = arr[indx2]
        arr[indx2] = temp
    }
    
    let endInd = startInd

    for(let i = startInd+1; i < end; i++){
        if(arr[i] < arr[startInd]){
            endInd++
            swap(arr, endInd, i)
        }
    }
    swap(arr, endInd, startInd)
    return endInd
}

const quickSort = (arr, left=0, right=arr.length) => {
    if(left < right) {
        let ind = pivot(arr, left, right)
        quickSort(arr, left, ind-1) //left
        quickSort(arr, ind+1, arr.length) //right
    }
    return arr;
}


let array1 = [5, 2, 1, 8, 9, 7, 9, 0, -1]
console.log(quickSort(array1))
console.log(array1)

// big O: Time O(n log n) -- Best Case
// -- same as merge 
// O(log n) decompositions
// Worst Case - O(n^2) 
// --- Think [1,2,3,4]
// --- Start pivot at index: 0 -- Nothing goes to the left of it
// --- You have to loop through each element and compare each element