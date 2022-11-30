//project name and year 
//All companies founded in the year 2006,
db.companies.find({
    founded_year: 2006
},{
    name: 1,
    founded_year: 1
})

//- All companies founded after the year 2000
//filter by $gt 
db.companies.find({
  founded_year: { $gt: 2000}  
},{
    name: 1,
    founded_year: 1
})

//- All companies founded between the year 1900 and 2010
db.companies.find({
    founded_year: { $gte:1900, $lte: 2010}
},{
    name: 1,
    founded_year: 1
})

//IPO evaluation
//- All companies with valuation amount higher than 100 million
//IPO can null or an object
//<field>.<field> --> object mapping
//ipo.valuation_amount
db.companies.find({
    "ipo": {$ne: null}, "ipo.valuation_amount": {$gte: 100000000}
},{
    name: 1,
    ipo: {valuation_amount: 1, valuation_currency_code: 1}
})

//- All companies with valuation amount higher than 100 million and with the currency being 'USD'
db.companies.find({
    "ipo": {$ne: null}, "ipo.valuation_amount": {$gte: 100000000}, "ipo.valuation_currency_code": {$eq: "USD"}
},{
    name: 1,
    ipo: {valuation_amount: 1, valuation_currency_code: 1}
})

