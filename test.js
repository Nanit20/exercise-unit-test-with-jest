test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    let result = fromEuroToDollar(3.5)
    expect(result).toBe(4.2315000000000005);
})

test("One Dollar should be 105.789909 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    let result = fromDollarToYen(1)
    expect(result).toBe(105.78990901571547);
})

test("One yen should be x punds", function(){
    const { fromYentoPund } = require('./app.js')
    let result = fromYentoPund(1)
    expect(result).toBe(0.006254886630179828);
})