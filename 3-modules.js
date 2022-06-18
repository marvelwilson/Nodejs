//CommonJS, every file is module (by default)
//Modules - Encalsulate Code (only share minium)
const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mine-grenade')


console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

 
