// find median of an array
function median(array) {
    let length = array.length
    if (length % 2 === 0) {
        return (array[length / 2] + array[length / 2 - 1]) / 2
    } else {
        return array[Math.floor(length / 2)]
    }
}

// find mean of an array
function mean(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

function calculate_median_mean(array) {
    let result = {}
    result.median = median(array)
    result.mean = mean(array)
    return result
}

function find_median_mean(array) {
    let result = []
    let temp_array = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            result.push(
                calculate_median_mean(temp_array)
            )
            temp_array = []
        } 
        temp_array.push(array[i])
        if (i === array.length - 1) {
            result.push(
                calculate_median_mean(temp_array)
            )
        }
    }
    return result
}

let array = [3, 4, 6, 17, 25, 21, 23]
console.log(find_median_mean(array))