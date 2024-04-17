let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let fromDollarToYen = (dollar) => (dollar * (oneEuroIs.JPY/oneEuroIs.USD))

let fromEuroToDollar = (euro) => (euro * (oneEuroIs.USD))

let fromYentoPund = (yen) => (yen * (oneEuroIs.GBP/oneEuroIs.JPY))


module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYentoPund,
}