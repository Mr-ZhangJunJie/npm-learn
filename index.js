const lodash = require('lodash')
const { printMsg } = require('./test')

printMsg()
var output = lodash.without([1, 2, 3], 1)
console.log(output)
