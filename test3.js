let currency_denominations = [
    100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100
]

// get_denominations recieve two parameters:
// 1. amount: the amount of money that you want to convert
// 2. notes: how many notes you want to get
// it will return an array of notes that sum up to equal or bigger than amount
// e.g. get_denominations(23000, 4) will return [20000, 1000, 1000, 1000]

function get_denominations(amount, notes) {
    let result = []
    let i = 0
    while (i < notes) {
        let j = 0
        while (j < currency_denominations.length) {
            if (currency_denominations[j] <= amount) {
                if (notes <= 1) {
                    result = [currency_denominations[j-1]]
                    break
                }
                result.push(currency_denominations[j])
                amount -= currency_denominations[j]
            }
            j += 1
        }
        i += 1
    }
    return result
}