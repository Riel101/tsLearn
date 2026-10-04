function indexOfValue(arr, t) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === t) {
            return i
        }
    }
    return -1
}

const nums = [12, 5, 88, 3, 45, 88, -7];
console.log(indexOfValue(nums, -7));