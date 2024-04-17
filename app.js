let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.209, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = (dollar) => (dollar * (oneEuroIs.JPY/oneEuroIs.USD))

let fromEuroToDollar = (euro) => (euro * (oneEuroIs.USD))

let fromYentoPund = (yen) => (yen * (oneEuroIs.GBP/oneEuroIs.JPY))


module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYentoPund,
}