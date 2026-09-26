function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const nums = [12, 5, 88, 3, 45, 88, -7];
let res = findMax([2, 3, 8, 1, 8, 3, 9])
console.log(findMax(nums))


function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

let resMin = findMin([2, 3, 8, 1, 8, 3, 9])
console.log(resMin)
console.log(findMin())


function findAverage(arr) {
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    return avg / arr.length
}

let resAvg = findAverage([5, 5, 5, 5, 5, 5])
console.log(resAvg)
