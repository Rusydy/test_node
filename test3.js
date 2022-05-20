let currency_denominations = [
    100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100
]

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